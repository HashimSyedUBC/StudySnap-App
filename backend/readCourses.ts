// backend/readCourses.ts
import supabase from '../lib/supabaseClient';

export interface Course {
  courseName: string;
  courseCode: string;
  coursePath: string;
}

export const readCourses = async (): Promise<Course[]> => {
  try {
    // Fetch the list of courses from Supabase
    const { data: coursesList, error: listError } = await supabase
      .storage
      .from('StudySnap')
      .list('Courses');
    
    console.log(coursesList);

    if (listError) {
      throw listError;
    }

    // Process each course
    const courses = await Promise.all(coursesList.map(async (course) => {
      const courseInfoPath = `Courses/${course.name}/course_info.json`;
      
      try {
        const { data, error } = await supabase
          .storage
          .from('StudySnap')
          .download(courseInfoPath);

        if (error) {
          console.warn(`Course info file not found for: ${course.name}`);
          return null;
        }

        const content = await data.text();
        const courseInfo = JSON.parse(content);

        return {
          courseName: courseInfo.details.course_name,
          courseCode: courseInfo.details.course_code,
          coursePath: `Courses/${course.name}`
        };
      } catch (error) {
        console.warn(`Error processing course: ${course.name}`, error);
        return null;
      }
    }));

    return courses.filter(course => course !== null) as Course[];
  } catch (error) {
    console.error('Error reading courses:', error);
    throw error;
  }
};
