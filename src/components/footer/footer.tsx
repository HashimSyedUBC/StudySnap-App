import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 92px;
  padding: 128px 16px;
  max-width: 1080px;
  margin: 0 auto;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 33.33%;

  &:first-child {
    align-items: flex-start;
  }

  &:last-child {
    align-items: flex-end;
  }

  &:nth-child(2) {
    align-items: center;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;
const Title = styled.span`
  ${fonts.Bolded28}
  margin-bottom: 24px;
  text-align: inherit;
`;

const Body = styled.a`
  ${fonts.H400}
  color: black;
  margin-bottom: 24px;
  text-align: inherit;
  &:hover {
    color: ${colors.hoverBlack}
  }
`;

const Copy = styled.div`
  ${fonts.H400}
  margin-bottom: 16px;
  width: 100%;
  text-align: center; // Center-align the copyright text
`;

const FooterComponent = () => {
  return (
    <>
    <OuterContainer>
      <MainContainer>
        <Column>
          <Title>Social Media</Title>
          <Body href='https://www.linkedin.com'>LinkedIn</Body>
          <Body href='https://www.instagram.com'>Instagram</Body>
          <Body href='https://www.facebook.com'>Facebook</Body>
          <Body href='https://www.tiktok.com'>Tiktok</Body>
        </Column>
        <Column>
          <Title>More</Title>
          <Body href='/about'>About Us</Body>
          <Body href='/universities'>Top Universities</Body>
          <Body href='/reviews'>Reviews</Body>
          <Body href='/blog'>Blog</Body>
        </Column>
        <Column>
          <Title>Information</Title>
          <Body href='/copyright'>Copyright</Body>
          <Body href='/terms'>Terms</Body>
          <Body href='/faq'>FAQ</Body>
          <Body href='/feedback'>Feedback</Body>
        </Column>
      </MainContainer>
      
    </OuterContainer>
    <Copy>
    © 2024 StudySnap Inc. All rights reserved.
  </Copy>
  </>
  );
};

export default FooterComponent;