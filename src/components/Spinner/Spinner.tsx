import React from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../../styles/theme';

// Keyframes for the spinner animation
const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Styled component for the spinner
const StyledSpinner = styled.div`
  border: 20px solid rgba(0, 0, 0, 0.1);
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border-left-color: ${colors.mainColor};
  animation: ${rotate} 1s linear infinite;
`;

const Spinner: React.FC = () => {
  return <StyledSpinner />;
};

export default Spinner;