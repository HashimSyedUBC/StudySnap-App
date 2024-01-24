import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faBook, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Button from '../Button/Button';

const Container = styled.div`
  margin-top: 128px;
  padding-bottom: 128px;
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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 64px 74px;
  max-width: 100%;
  min-height: 890px;
`;

const Title = styled.span`
  ${fonts.Bolded56}
  margin-bottom: 64px;
`;

const IconStyled = styled(FontAwesomeIcon)`
font-size: 32px;
`;

const BoxShadow = styled.div`
  width: 380px;
  height: 158px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer; // Changes the cursor to indicate clickability
  transition: transform 0.3s ease, box-shadow 0.3s ease; // Smooth transition for hover effect

  &:hover {
    transform: translateY(-5px); // Slightly raise the box on hover
    box-shadow: 0px 6px 12px #fdcba6; // Enhanced shadow with color #FDCBA6
    color: ${colors.courseHover};

  }
`;
const CourseTitle = styled.span`  
 ${fonts.H550}
   
`;

const CourseSubTitle = styled.span`
 ${fonts.H400}

 

`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 48px;
`;

const Tab = styled.div<{ isActive: boolean }>`
  padding: 12px 24px;
  ${fonts.H600};
  background-color: ${props => props.isActive ? colors.mainColor : 'transparent'};
  transition: transform 0.2s ease, height 0.2s ease;
  cursor: pointer;

  
  ${props => props.isActive && `
    transform: translateY(-4px);
    border: 1px solid black;
  `}
`;

const ButtonContainer2 = styled.div`
    width: 190px;
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;




const Sections: React.FC = () => {
    const sections: { sectionName: string; sectionNumber: number }[] = [
        { sectionNumber: 1, sectionName: 'Introduction' },
        { sectionNumber: 2, sectionName: 'Fundamentals Of Threading' },
        { sectionNumber: 3, sectionName: 'Intermediate Concepts' },
        { sectionNumber: 4, sectionName: 'Advanced Topics' },
        { sectionNumber: 5, sectionName: 'Case Studies in Biology' },
        { sectionNumber: 6, sectionName: 'Practical Applications' },
        { sectionNumber: 7, sectionName: 'Project Work' },
        { sectionNumber: 8, sectionName: 'Summary' },
        { sectionNumber: 9, sectionName: 'Resources' },
        { sectionNumber: 10, sectionName: 'FAQs' },
        { sectionNumber: 11, sectionName: 'Conclusion' }
      ];

      const tests: { testName: string; testSections: string }[] = [
        { testSections: "1 - 6", testName: 'Midterm I' },
        { testSections: "6 - 12", testName: 'Midterm II' },
        { testSections: "1 - 12", testName: 'Final Exam' },
      ];
    const router = useRouter();
    const courseCode = router.query.courseCode as string;
    const courseName = router.query.courseName as string;

    const [activeTab, setActiveTab] = useState('chapters');

    const renderContent = () => {
        switch(activeTab) {
            case 'chapters':
                return (
                    <CoursesGrid>
                        <Link href="/upload">
                            <BoxShadow>
                                <CourseTitle>
                                    Add New Chapter
                                </CourseTitle>
                                <IconStyled icon={faBook}/>
                            </BoxShadow>
                        </Link>
                        {sections.map((section, index) => (
                            <Link 
                            href={`/chapter?courseCode=${encodeURIComponent(courseCode)}&courseName=${encodeURIComponent(courseName)}&sectionName=${encodeURIComponent(section.sectionName)}&sectionNumber=${section.sectionNumber}`} 
                            passHref 
                            key={index}
                          >
                            <BoxShadow key={index}>
                                <CourseTitle>Chapter {section.sectionNumber}</CourseTitle>
                                <CourseSubTitle>{section.sectionName}</CourseSubTitle>
                            </BoxShadow>
                            </Link>
                        ))}
                    </CoursesGrid>
                );
            case 'tests':
                return (
                    <CoursesGrid>
                        {tests.map((test, index) => (
                          
                            <BoxShadow key={index}>
                                <CourseTitle>Chapters {test.testSections}</CourseTitle>
                                <CourseSubTitle>{test.testName}</CourseSubTitle>
                            </BoxShadow>
                        ))}
                    </CoursesGrid>
                );
            default:
                return null;
        }
    };

    return (
        <Container>
            <TabWrapper>
            <Title>
                {courseCode} - {courseName}
            </Title>
            <ButtonContainer2 >
                <Button  text='Back' onClick={() => router.back()} width='100%' icon={faRotateLeft}/>
                </ButtonContainer2>
            </TabWrapper>

            
            <TabContainer>
                <Tab isActive={activeTab === 'chapters'} onClick={() => setActiveTab('chapters')}>
                    Sections
                </Tab>
                <Tab isActive={activeTab === 'tests'} onClick={() => setActiveTab('tests')}>
                    Mock Exams
                </Tab>
            </TabContainer>
              
            {renderContent()}
            
        </Container>
    );
};


export default Sections;
