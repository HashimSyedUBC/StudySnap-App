import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

type ErrorbannerWrapperProps = {
    isVisible: boolean;
}


const ErrorBannerWrapper = styled.div<ErrorbannerWrapperProps>`
  width: 100%;
  max-height: 36px;
  padding: 24px 24px;
  background-color: ${colors.rejectedRed};
  color: white;
  ${fonts.H500};
  z-index: 999;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;



type ErrorBannerProps = {
  message: string;
  isOpen?: boolean;
}

const StyledIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 28px;
`;

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, isOpen}) => {

  return (
    <>
      {isOpen && (
        <ErrorBannerWrapper isVisible={isOpen}>
          {message}
          <StyledIcon icon={faExclamationTriangle} />
        </ErrorBannerWrapper>
      )}
    </>
  );
};

export default ErrorBanner;
