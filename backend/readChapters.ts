import supabase from '../lib/supabaseClient';

export interface Chapter {
  chapterName: string;
  chapterNumber: number;
  chapterMarkdown: string;
}

export const readChapters = async (courseName: string): Promise<Chapter[]> => {
  const sanitizedCourseName = courseName.replace(/\s+/g, '');
  const coursePath = `Courses/${sanitizedCourseName}`;

  try {
    // List all directories (chapters) inside the course path
    const { data: chaptersList, error: listError } = await supabase
      .storage
      .from('StudySnap')
      .list(coursePath, { limit: 100, offset: 0, sortBy: { column: 'name', order: 'asc' } });

    if (listError) {
      throw listError;
    }

    const chapters = await Promise.all(
      chaptersList.map(async (chapterDir, index) => {
        if (chapterDir.metadata && chapterDir.metadata.is_directory) {
          const chapterPath = `${coursePath}/${chapterDir.name}`;

          // List markdown files in the chapter directory
          const { data: mdFilesList, error: mdFilesError } = await supabase
            .storage
            .from('StudySnap')
            .list(chapterPath);

          if (mdFilesError) {
            console.warn(`No markdown files found in chapter directory: ${chapterDir.name}`);
            return null;
          }

          const mdFiles = mdFilesList.filter(file => file.name.endsWith('.md'));

          if (mdFiles.length > 0) {
            const markdownContent = await Promise.all(
              mdFiles.map(async (file) => {
                const { data, error } = await supabase
                  .storage
                  .from('StudySnap')
                  .download(`${chapterPath}/${file.name}`);

                if (error) {
                  console.warn(`Error downloading markdown file: ${file.name}`, error);
                  return '';
                }

                return await data.text();
              })
            );

            const chapterMarkdown = addCoursesToImagePaths(markdownContent.join('\n'));

            return {
              chapterName: chapterDir.name,
              chapterNumber: index,
              chapterMarkdown: chapterMarkdown
            };
          } else {
            console.warn(`No markdown files found in chapter directory: ${chapterDir.name}`);
            return null;
          }
        } else {
          return null;
        }
      })
    );
    console.log(chapters)
    return chapters.filter(chapter => chapter !== null) as Chapter[];
  } catch (error) {
    console.error('Error reading chapters:', error);
    throw error;
  }
};

function addCoursesToImagePaths(markdown: string) {
  // Handle markdown image syntax
  markdown = markdown.replace(/!\[([^\]]*)\]\((\/[^\)]+)\)/g, '![$1](/Courses$2)');

  // Handle HTML img tags
  markdown = markdown.replace(/<img\s+src="(\/[^"]+)"/g, '<img src="/Courses$1"');

  return markdown;
}
