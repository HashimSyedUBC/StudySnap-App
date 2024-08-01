import React, { useContext } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../Context/authProvider';

const HeaderContainer = styled.header`
  background-color: ${colors.mainColor};
  width: 100%;
`;

const HeaderItem = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
  ${fonts.H601}
  font-size: 24px;
  position: relative;
  transition: color 0.3s ease, transform 0.3s ease;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 3px;
      background-color: ${colors.hoverBlack};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }

    transform: translateY(-2px);
  }
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (min-width: 768px) {
    gap: 64px;
  }
`;

const IconStyled = styled(FontAwesomeIcon)`
  ${fonts.H700}
`;

const ClickableContainer = styled.a`
  display: flex;
  align-items: center;
  border: none;
  gap: 8px;
  cursor: pointer;
  ${fonts.H601}
  &:hover {
    color: ${colors.hoverBlack};
  }

  @media (min-width: 768px) {
    gap: 12px;
  }
`;

const ResponsiveContainer = styled.div`
  height: 80px;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;

  @media (min-width: 768px) {
    height: 128px;
  }

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

const Header = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  const { isLoggedIn, logout } = authContext;

  const handleLogout = () => {
    logout();
  };

  return (
    <HeaderContainer>
      <ResponsiveContainer>
        <ClickableContainer>
          <IconStyled icon={faBook} />
          <HeaderItem href="/">StudySnap</HeaderItem>
        </ClickableContainer>
        <RightContainer>
          {isLoggedIn ? (
            <>
              <HeaderItem href="/">Dashboard</HeaderItem>
              <HeaderItem onClick={handleLogout}>Log Out</HeaderItem>
            </>
          ) : (
            <>
              <HeaderItem href="/loginSignup">Sign Up</HeaderItem>
              <HeaderItem href="/loginSignup">Log In</HeaderItem>
            </>
          )}
        </RightContainer>
      </ResponsiveContainer>
    </HeaderContainer>
  );
};

export default Header;
