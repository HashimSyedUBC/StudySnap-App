import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faFeather } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';


const Container = styled.div`
  margin-top: 128px;
  margin-left: 64px;
  margin-right: 64px;
  display: flex;
  flex-direction: column;
  margin-left:  auto;
  margin-right: auto;
  max-width: 1080px;
  border-bottom: 1px solid black;
  border-radius: 0px;

  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const Title = styled.span`
  ${fonts.Bolded48}
  margin-bottom: 64px;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 64px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-right: 24px;
  background: white; // Adjust the color as needed
  border-radius: 0px;
  border-right: 1px solid #e0e0e0; // Adjust the color as needed
  min-width: 300px;
`;

interface ChapterProps {
    isActive: boolean;
  }
  
const Chapter = styled.div<ChapterProps>`
  cursor: pointer;
  padding: 16px 10px;
  margin: 5px 0;
  &:hover {
    background-color: ${colors.shadowOrange}; // Adjust the hover color as needed
  }
  ${fonts.H500}
  max-width: 250px;
  background-color: ${props => props.isActive ? colors.mainColor : 'transparent'}; // Active chapter color: ;
  box-shadow: ${props => props.isActive ? '0px 4px 8px rgba(0, 0, 0, 0.1)' : 'none'};
  transform: ${props => props.isActive ? 'scale(1.05)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;

`;

const Content = styled.div`
padding-left: 64px;
`;

const MarkdownContent = styled(ReactMarkdown)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
  max-height: 800px; // Adjust to the height you want
  overflow-y: auto; // Will show scrollbar when content overflows   
    & h1 {
    margin-top: -10px;
    color: black;
    ${fonts.SemiBolded32}
  }
  & h2 {
    color: black;
    ${fonts.Bolded28}
  }
  & p {
    color: black;
    ${fonts.Bolded24}
  }
  & li {
    color: black;
    ${fonts.SemiBolded20}
  }
`





const testMarkDown = `# Lecture 1_b - CS 3305A: Introduction to Operating Systems: A Historical Perspective

## Operating System Definition

- Operating System (OS) is the software layer between user applications and hardware.
- Its function is to manage and optimize the hardware resources.
- Examples include Windows, Mac OS, Linux, iOS, Android, Blackberry, TinyOS.

## Four Pillars of Operating Systems

- **Process Management**
- **Memory Management**
- **Storage Management**
- **File Management**

## Historical Overview of Operating Systems

**First Generation (1945-1955)**

- Direct Input method was used: one job run at a time.
- No need for an operating system.

**Second Generation (1955-1965)**

- Introduction of Batch Systems where multiple programs were written on paper or assembly.
- IBM’s OS/360 was an example of OS for this generation.

**Third Generation (1965-1980)**

- Introduction of Integrated Circuits (IC) and Multiprogramming, allowing several jobs to be active at once.

**Fourth Generation (1980- present)**
 
- Marked by the introduction of Personal Computers.
- Rise of Microsoft and MS-DOS which was originally called Disk Operating System (DOS).
- Apple’s Macintosh introduced the first Graphical user interface (GUI) in 1984.

## Special Mention: UNIX

- MULTICS, the first large timesharing OS, led to the development of UNIX.
- UNIX was an open-source project which led to System V (AT&T) and BSD (Berkeley Software Distribution)

## MINIX and Linux

- After the release of UNIX, Andrew Tanenbaum created a structurally improved UNIX-compatible OS called MINIX or mini-Unix.
- A Finnish student, Linus Torvalds, modified MINIX to create his own OS Linux, marking a significant success of the open source movement.

**Next Lecture: Child and Parent processes**`;
const testMarkDown2 = `# Lecture 3 - CS 3305A: Process

## Fork() Example
- Discussion of a code example involving the 'fork()' command
- The output of the example was unpredictable as the swapping between parent and child process depends on machine load and process scheduling

## Fork() Possible Outputs
- Multiple potential outputs from the 'fork()' command sequence were provided and discussed for a clearer understanding

## Execution
- Here, the focus was on how processes share CPU and how the output is nondeterministic, i.e., you cannot determine output merely by looking at the code

## Execl()
- Discussed the 'execl()' system call, noting that it replaces a process with a loaded program, including its associated memory image
- Pointed out that, 'execl()' doesn't return on success, while it returns -1 on failure

## Fork() and Execl() Relation
- The lecture further proceeded with an example program illustrating the use of 'execl()' together 
- The key takeaway was understanding that 'execl()' overlays a new program on the existing process and the child won't return to the old program unless the operation fails

## Multiple Forks
- The number of processes created in a program with multiple 'execl()' calls was examined
- Discussed in detail, how the internal execution flow works when consecutive 'execl()' calls are made and how many processes are created with different PIDs
- Summarized that 'execl()' / parent process has created a total of 7 child processes with their respective PIDs and parent PIDs (getppid())
`;




const chapters = [
    {
      chapterName: 'Introduction',
      chapterMarkdown: testMarkDown
    },
    {
      chapterName: 'Chapter 1',
      chapterMarkdown: testMarkDown2
    },
    {
        chapterName: 'Chapter 2',
        chapterMarkdown: testMarkDown
      },
      {
        chapterName: 'Chapter 3',
        chapterMarkdown: testMarkDown2
      },
      {
        chapterName: 'Chapter 4',
        chapterMarkdown: testMarkDown
      },
      {
        chapterName: 'Chapter 5',
        chapterMarkdown: testMarkDown2
      },
      {
        chapterName: 'Chapter 6',
        chapterMarkdown: testMarkDown
      },
      {
        chapterName: 'Chapter 7',
        chapterMarkdown: testMarkDown2
      },
  ];
  
  const Chapters: React.FC = () => {
    const router = useRouter()
    const courseCode = router.query.courseCode as string;
    const courseName = router.query.courseName as string;
    const sectionNumber = parseInt(router.query.sectionNumber as string, 10);
    const [activeChapter, setActiveChapter] = useState(
        !isNaN(sectionNumber) && chapters[sectionNumber] ? chapters[sectionNumber] : chapters[0]
      );

    const handleChapterClick = (chapterIndex: number) => {
      setActiveChapter(chapters[chapterIndex]);
    };
  
    return (
      <Container>
        <Title>{courseCode} - {courseName}</Title>
        <Layout>
          <Sidebar>
            {chapters.map((chapter, index) => (
              <Chapter
                key={index}
                isActive={chapter.chapterName === activeChapter.chapterName}
                onClick={() => handleChapterClick(index)}
              >
                {chapter.chapterName}
              </Chapter>
            ))}
          </Sidebar>
          <Content>
            <MarkdownContent remarkPlugins={[gfm]}>
              {activeChapter.chapterMarkdown}
            </MarkdownContent>
          </Content>
        </Layout>
      </Container>
    );
  };

export default Chapters;
