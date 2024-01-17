import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

// Keyframes for dot animation
const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

// Styled component for animated dots
const Dots = styled.span`
font-size: 300px;
color: ${colors.mainColor};
line-height: 0px;
  &::after {
    content: '.';
    animation: ${blink} 1s linear infinite;
  }
`;
const Dot2 = styled.span`
font-size: 300px;
line-height: 0px;
color: ${colors.mainColor};
  width: 20px;
  height: 20px;
  &::after {
    content: '.';
    animation: ${blink} 1.5s linear infinite;
  }
`;
const Dot3 = styled.span`
font-size: 300px;
line-height: 0px;
color: ${colors.mainColor};
  width: 20px;
  height: 20px;
  &::after {
    content: '.';
    animation: ${blink} 2s linear infinite;
  }
`;
const Dot4 = styled.span`
font-size: 300px;
line-height: 0px;
color: ${colors.mainColor};
  width: 20px;
  height: 20px;
  &::after {
    content: '.';
    animation: ${blink} 2.5s linear infinite;
  }
`;


// Styled component for the message
const Message = styled.div`
  ${fonts.H1000}
  margin-bottom: 20px;
  text-align: center;
`;


const Placeholder: React.FC = () => {
 


  return (
    <div>
      <Message>{"Almost there, preparing your notes"}<Dots /><Dot2 /><Dot3 /><Dot4 /></Message>
    </div>
  );
};

export default Placeholder;