import React, { useEffect, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

type ErrorbannerWrapperProps = {
    isVisible: boolean;
}


const ErrorBannerWrapper = styled.div<ErrorbannerWrapperProps>`
  width: 100%;
  max-height: 36px;
  padding: 24px;
  background-color: ${colors.rejectedRed};
  color: ${colors.defaultWhite};
  ${fonts.H200};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;



type ErrorBannerProps = {
  message: string;
  isOpen?: boolean;
}

const StyledIcon = styled.i`
  color: ${colors.defaultWhite};
  font-size: 26px;
`;

const ErrorBanner: React.FC<ErrorBannerProps> = ({ message, isOpen}) => {

  return (
    <>
      {isOpen && (
        <ErrorBannerWrapper isVisible={isOpen}>
          <StyledIcon className='fa-solid fa-triangle-exclamation' />

          {message}
        </ErrorBannerWrapper>
      )}
    </>
  );
};

export default ErrorBanner;
