import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { colors, fonts } from '../../../styles/theme';
import Link from 'next/link';

// Container with gradient background
const Container = styled.div`
    padding-top: 128px;
    padding-bottom: 128px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;
const MainContainer = styled.div`
  background: ${colors.superLighBlue};
  text-align: center;
  color: Black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 1440px;
  @media (max-width: 1920px) {
    width: 1080px;
  }
`;

const Con = styled.div`
  margin-top: 128px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
  @media (max-width: 1920px) {
    width: 920px;
  }
`;

// Title text
const Title = styled.h1`
    ${fonts.Bolded48}
    max-width: 668px;
`;

// Description text
const Description = styled.p`
  ${fonts.H500}
  max-width: 1131px;
`;

// Triangle Component (Styled Component)
const Triangle = styled.div`
    width: 0; 
    height: 0; 
    border-style: solid;
`;

// Left Facing Right-Angled Triangle, Flipped Horizontally and Vertically
const LeftTriangle = styled(Triangle)`
    border-width: 290px 650px 0 0;
    border-color: transparent #f9bff3 transparent transparent;
    @media (max-width: 1920px) {
    border-width: 217.5px 487.5px 0 0;
  }
`;
// Right Facing Right-Angled Triangle
const RightTriangle = styled(Triangle)`
    border-width: 290px 0 0 650px;
    border-color: transparent transparent transparent #9ef7d2;
    @media (max-width: 1920px) {
    border-width: 217.5px 0 0 487.5px;
  }
    
`;

const TriContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

const FirstSectionMain: React.FC = () => {
  return (
    <Container>
    <MainContainer>
    <Con>
      <Title>Generate Your Own Notes, Supercharged By AI</Title>
      <Description>Ready for smarter studying? Upload your lecture content and let AI craft your personalized course notes. Click here to begin and transform the way you learn.</Description>
      <Link href="" passHref>
      <Button text='Get Started' icon={faChevronRight} width='300px' />
      </Link>
      </Con>
      <TriContainer>
        <RightTriangle />
        <LeftTriangle />
      </TriContainer>
    </MainContainer>
    </Container>
  );
};

export default FirstSectionMain;
