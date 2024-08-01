import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faArrowLeft  } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import router, { useRouter } from 'next/router';
import { Course } from '../../../backend/readCourses';
import { AuthContext } from '../../Context/authProvider';

const Container = styled.div`
  margin-top: 128px;
  padding-bottom: 128px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  border-bottom: 1px solid black;
  border-radius: 0px;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  max-width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-gap: 48px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    grid-gap: 64px 74px;
  }
`;

const Title = styled.span`
  ${fonts.Bolded48}
  font-size: 44px;
  margin-bottom: 64px;
`;

const IconStyled = styled(FontAwesomeIcon)`
  font-size: 32px;
`;

const BoxShadow = styled.div`
  width: 100%;
  height: 158px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 12px rgba(253, 203, 166, 1);
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
  flex-wrap: wrap;
  gap: 16px;
`;

const ButtonContainer2 = styled.div`
  width: 190px;
`;


const YourCoursesMain: React.FC = () => {

  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    fetch('/api/courses')
      .then(res => res.json())
      .then(data => setCourses(data.courses));
  }, []);

  const handleCourseClick = (course: Course) => {
    if (!authContext) {
      throw new Error('AuthContext must be used within an AuthProvider');
    }
    const { isLoggedIn } = authContext;

    if (!isLoggedIn) {
      router.push('/loginSignup');
    } else {
      router.push(`/chapter?courseCode=${encodeURIComponent(course.courseCode)}&courseName=${encodeURIComponent(course.courseName)}&coursePath=${encodeURIComponent(course.coursePath)}`);
    }
  };
return (
  <Container>
    <TabWrapper>
      <Title>Avalaible Courses</Title>
    </TabWrapper>
    <CoursesGrid>
      {courses.map((course, index) => (
       <div key={index} onClick={() => handleCourseClick(course)}>
          <BoxShadow>
            <CourseTitle>{course.courseCode}</CourseTitle>
            <CourseSubTitle>{course.courseName}</CourseSubTitle>
          </BoxShadow>
        </div>
      ))}
    </CoursesGrid>
  </Container>
);
};

export default YourCoursesMain;
