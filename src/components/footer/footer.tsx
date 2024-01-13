import React from 'react';
import styled from 'styled-components';
import { fonts } from '../../../styles/theme';

const MainContainer = styled.div`
  width: 1440px;
  padding: 128px 0;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 1920px) {
    width: 1080px;
  }
  
`;


const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 92px;

`

const Copy = styled.div`
    width: 1440px;
    ${fonts.H400}
    margin-bottom: 24px;
    margin-right: auto;
    margin-left: auto;
    @media (max-width: 1920px) {
    width: 1080px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${fonts.H500}

`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 455px;
  ${fonts.H500}
  @media (max-width: 1920px) {
    margin-right: 290px;
  }
`;

const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
  ${fonts.H500}
  margin-right: 435px;
  @media (max-width: 1920px) {
    margin-right: 240px;
  }
`;

const Title = styled.span`
    ${fonts.Bolded28}
    width: 200px;
    margin-bottom: 24px;
`
const Body = styled.a`
    ${fonts.H400}
    color: black;
    margin-bottom: 24px;
`;

 

// React component for the footer
const FooterComponent = () => {
  return (
    <OuterContainer>
<MainContainer>
    <LeftContainer>
        <Title>
            Social Media
        </Title>
        <Body href='https://www.linkedin.com'>
            LinkedIn
        </Body>
        <Body href='https://www.instagram.com'>
            Instagram
        </Body>
        <Body href='https://www.facebook.com'>
            Facebook
        </Body>
        <Body href='https://www.tiktok.com'>
            Tiktok
        </Body>
    </LeftContainer>
    <MiddleContainer>
        <Title>
            More
        </Title>
        <Body href='/about'>
            About Us
        </Body>
        <Body href='/universities'>
            Top Universities
        </Body>
        <Body href='/reviews'>
            Reviews
        </Body>
        <Body href='/blog'>
            Blog
        </Body>
    </MiddleContainer>
    <RightContainer>
        <Title>
            Information
        </Title>
        <Body href='/copyright'>
            Copyright
        </Body>
        <Body href='/terms'>
            Terms
        </Body>
        <Body href='/faq'>
            FAQ
        </Body>
        <Body href='/feedback'>
            Feedback
        </Body>
    </RightContainer>
</MainContainer>
<Copy>
© 2024 StudySnap Inc. All rights reserved.
</Copy>


    </OuterContainer>
    
  
    )
    
};

export default FooterComponent;
