import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';
import Button from '../Button/Button';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { AuthContext } from '../../Context/authProvider';

const Container = styled.div`
  
  margin: 64px auto;
  padding: 0 32px;
  max-width: 1080px;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }


`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
`;

const Title = styled.h1`
  ${fonts.Bolded48}
  color: ${colors.primary};
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 48px;
  
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.nav`
  background: ${colors.backgroundLight};
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const ChapterList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

interface ChapterItemProps {
  isActive: boolean;
}

const ChapterItem = styled.li<ChapterItemProps>`
  margin-bottom: 12px;
  transition: all 0.3s ease;

  button {
    width: 100%;
    text-align: left;
    padding: 12px 16px;
    border: none;
    background-color: ${props => props.isActive ? colors.primary : 'transparent'};
    color: ${props => props.isActive ? colors.white : colors.text};
    border-radius: 8px;
    cursor: pointer;
    ${fonts.H500}
    transition: all 0.3s ease;

    &:hover {
      background-color: ${props => props.isActive ? colors.primary : colors.shadowOrange};
      transform: translateY(-2px);
    }
  }
`;

const Content = styled.main`
  background: ${colors.white};
  border-radius: 12px;
  padding: 32px;
  padding-top: 0px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const MarkdownContent = styled(ReactMarkdown)`
  padding-bottom: 16px;
  padding-right: 16px;
  max-height: 800px;
  overflow-y: auto;

 

  & h1 {
    color: ${colors.primary};
    ${fonts.SemiBolded32}
    border-bottom: 2px solid ${colors.primary};
    padding-bottom: 0.3em;
    margin-top: -0px;
  }

  & h2 {
    color: ${colors.secondary};
    ${fonts.Bolded28}
  }

  & h3 {
    color: ${colors.tertiary};
    ${fonts.SemiBolded24}
  }

  & p {
    color: ${colors.text};
    ${fonts.Bolded20}
    line-height: 1.6;
    margin-bottom: 1em;
  }

  & ul, & ol {
    margin-bottom: 1em;
    padding-left: 2em;
  }

  & li {
    color: ${colors.text};
    ${fonts.SemiBolded18}
    margin-bottom: 0.5em;
  }

  & img {
    max-width: 100%;
    height: auto;
    margin: 1em 0;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }

  & blockquote {
    border-left: 4px solid ${colors.primary};
    padding-left: 1em;
    margin: 1em 0;
    font-style: italic;
    color: ${colors.textLight};
  }

  & code {
    background-color: ${colors.codeBackground};
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-family: 'Courier New', Courier, monospace;
  }

  & pre {
    background-color: ${colors.codeBackground};
    padding: 1em;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1em 0;
  }

  & table {
    border-collapse: collapse;
    width: 100%;
    margin: 1em 0;
  }

  & th, & td {
    border: 1px solid ${colors.border};
    padding: 0.5em;
    text-align: left;
  }

  & th {
    background-color: ${colors.tableHeader};
  }

  & p, & li {
    line-height: 1.6;
  }

  & ul ul, & ol ol, & ul ol, & ol ul {
    padding-left: 1.5em;
    margin-top: 0.5em;
  }

  /* Add this new styling for bold text */
  & strong {
    ${fonts.actual_bold}
  }

  & h1, & h2, & h3, & h4, & h5, & h6 {
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    ${fonts.actual_bold}
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const ButtonContainer2 = styled.div`
    width: 190px;
`;
interface Chapter {
  chapterName: string;
  chapterNumber: number;
  chapterMarkdown: string;
}

const Chapters: React.FC = () => {
  const router = useRouter();
  const courseCode = router.query.courseCode as string;
  const courseName = router.query.courseName as string;
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);

  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }

  const {isLoggedIn } = authContext;

  if (!isLoggedIn) {
    router.push("/loginSignup")
  }


  useEffect(() => {
    if (courseName) {
      fetch(`/api/chapter?courseCode=${encodeURIComponent(courseCode)}`)
        .then((res) => res.json())
        .then((data: any) => {
          setChapters(data.chapters);
          if (data.chapters && data.chapters.length > 0) {
            setActiveChapter(data.chapters[0]);
          }
        })
        .catch((error) => {
          console.error('Failed to fetch chapters:', error);
        });
    }
  }, [courseName]);

  const handleChapterClick = (chapterIndex: number) => {
    setActiveChapter(chapters[chapterIndex]);
  };

   return (
    <Container>
      <Header>
        <Title>{courseCode} - {courseName}</Title>
        <Button 
          text='Back' 
          onClick={() => router.back()} 
          icon={faArrowLeft}
          width="7%"
        />
      </Header>
      <Layout>
        <Sidebar>
          <ChapterList>
            {chapters.map((chapter, index) => (
              <ChapterItem
                key={index}
                isActive={chapter.chapterName === activeChapter?.chapterName}
              >
                <Button
                  text={chapter.chapterName}
                  onClick={() => handleChapterClick(index)}
                  width="100%"
                />
              </ChapterItem>
            ))}
          </ChapterList>
        </Sidebar>
        <Content>
          {activeChapter && (
            <MarkdownContent
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight, rehypeRaw]}
            >
              {activeChapter.chapterMarkdown}
            </MarkdownContent>
          )}
        </Content>
      </Layout>
    </Container>
  );
};

export default Chapters;