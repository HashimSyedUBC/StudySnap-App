import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faFeather, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import router from 'next/router';

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
`;

const Title = styled.span`
  ${fonts.Bolded48}
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
    box-shadow: 0px 6px 12px rgba(253, 203, 166, 1); // Enhanced shadow with color #FDCBA6
    color: ${colors.courseHover};

  }
`;
const CourseTitle = styled.span`  
 ${fonts.H500}
    @media (min-width: 1920px) {
        ${fonts.H600}

  }
`;

const CourseSubTitle = styled.span`
 ${fonts.H300}

 @media (min-width: 1920px) {
        ${fonts.H400}

  }

`;
const TabWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonContainer2 = styled.div`
    width: 190px;
`;



const YourCoursesMain: React.FC = () => {
const courses_mock = [
    {
        courseName: 'Introduction to Computer Science',
        courseCode: 'CS101',
        institution: 'University of Technology',
        courseArea: 'Computer Science',
        courseDate: '2022-09-01',
        courseLevel: 'Beginner',
    },
    {
        courseName: 'Advanced Mathematics',
        courseCode: 'MATH301',
        institution: 'State College',
        courseArea: 'Mathematics',
        courseDate: '2023-01-15',
        courseLevel: 'Advanced',
    },
    {
        courseName: 'World History',
        courseCode: 'HIST201',
        institution: 'City University',
        courseArea: 'History',
        courseDate: '2022-09-10',
        courseLevel: 'Intermediate',
    },
    {
        courseName: 'Organic Chemistry',
        courseCode: 'CHEM120',
        institution: 'National University',
        courseArea: 'Chemistry',
        courseDate: '2023-02-20',
        courseLevel: 'Intermediate',
    },
    {
        courseName: 'Business Management',
        courseCode: 'BUS101',
        institution: 'Global Business School',
        courseArea: 'Business',
        courseDate: '2022-08-05',
        courseLevel: 'Beginner',
    },
    {
        courseName: 'Principles of Economics',
        courseCode: 'ECON100',
        institution: 'Economics Institute',
        courseArea: 'Economics',
        courseDate: '2023-03-11',
        courseLevel: 'Beginner',
    },
    {
        courseName: 'Social Psychology',
        courseCode: 'PSYCH150',
        institution: 'University of the People',
        courseArea: 'Psychology',
        courseDate: '2022-10-17',
        courseLevel: 'Intermediate',
    },
    {
        courseName: 'Environmental Science',
        courseCode: 'ENV200',
        institution: 'Green Earth College',
        courseArea: 'Environmental Studies',
        courseDate: '2023-04-22',
        courseLevel: 'Intermediate',
    },
    {
        courseName: 'Software Development',
        courseCode: 'CS300',
        institution: 'Tech University',
        courseArea: 'Computer Science',
        courseDate: '2022-11-29',
        courseLevel: 'Advanced',
    },
    {
        courseName: 'Graphic Design Fundamentals',
        courseCode: 'DES110',
        institution: 'Design Academy',
        courseArea: 'Design',
        courseDate: '2022-07-13',
        courseLevel: 'Beginner',
    },
    {
        courseName: 'Modern Physics',
        courseCode: 'PHYS210',
        institution: 'Science Institute',
        courseArea: 'Physics',
        courseDate: '2023-05-09',
        courseLevel: 'Advanced',
    },
    {
        courseName: 'Literary Analysis',
        courseCode: 'LIT101',
        institution: 'Arts and Humanities College',
        courseArea: 'Literature',
        courseDate: '2022-12-04',
        courseLevel: 'Beginner',
    }
    ];
      
  return (
    <Container>
        <TabWrapper>
        <Title>
            Your Courses
        </Title>

        <ButtonContainer2 >
                <Button  text='Back' onClick={() => router.back()} width='100%' icon={faRotateLeft}/>
        </ButtonContainer2>
        </TabWrapper>
        <CoursesGrid>
            <Link href="/upload">
            <BoxShadow>
                <CourseTitle>
                    Generate New Course
                </CourseTitle>
                <IconStyled icon={faFeather}/>
            </BoxShadow>
            </Link>

                {
                    courses_mock.map((course, index) => (
                        <Link 
                            href={`/sections?courseCode=${encodeURIComponent(course.courseCode)}&courseName=${encodeURIComponent(course.courseName)}`} 
                            passHref
                            key={index} 
                        >
                        <BoxShadow key={index}>
                            <CourseTitle>{course.courseCode}</CourseTitle>
                            <CourseSubTitle>{course.courseName}</CourseSubTitle>
                        </BoxShadow>
                        </Link>
                    ))
                }

        </CoursesGrid>
    </Container>
  );
};

export default YourCoursesMain;
