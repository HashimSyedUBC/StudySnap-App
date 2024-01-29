import React from 'react';
import styled from 'styled-components';
import { colors, fonts} from '../../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons';

// Styled component for the header container
const HeaderContainer = styled.header`
  background-color: ${colors.mainColor};
`;

// Styled component for the logo and buttons
const HeaderItem = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  ${fonts.H601}
  font-size: 32px;
  position: relative; // Required for the pseudo-element
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {

    // Creating a moving underline effect
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px; // Positioning the underline
      width: 100%;
      height: 3px; // Thickness of the underline
      background-color: ${colors.hoverBlack};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1); // Expanding the underline on hover
    }

    // Optional: Slightly lifting the text on hover
    transform: translateY(-2px);
  }
`;


const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 64px;
`;

const IconStyled = styled(FontAwesomeIcon)`
  ${fonts.H700}
`
const ClickableContainer = styled.a`
  display: flex;
  align-items: center;
  border: none;
  gap: 12px;
  cursor: pointer;
  ${fonts.H601}
  &:hover {
    color: ${colors.hoverBlack};
  }
`;


const ResponsiveContainer = styled.div`
  height: 128px;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 1920px) {
    max-width: 1080px;
  }
`;
//replace false with the state that determines if user is logged in or not

const Header = () => {
  return (
    <HeaderContainer>
    <ResponsiveContainer>
        <ClickableContainer>
            <IconStyled icon={faBookOpen} />
            <HeaderItem href="/">StudySnap</HeaderItem>
        </ClickableContainer>
      <RightContainer>
        <HeaderItem href="/signup">Sign Up</HeaderItem>
        <HeaderItem href="/login">Log In</HeaderItem>
      </RightContainer>
      {false && <RightContainer> 
        <HeaderItem href="/signup">Search Course</HeaderItem>
        <HeaderItem href="/login">Your Courses</HeaderItem>
        <HeaderItem href="/login">User Info</HeaderItem>
      </RightContainer>}
    </ResponsiveContainer>
    </HeaderContainer>

  );
};

export default Header;
