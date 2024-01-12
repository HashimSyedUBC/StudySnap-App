import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fonts, colors } from '../../../styles/theme';

// Define the props for the button component
interface ButtonProps {
  width: string;
  text: string;
  icon: IconDefinition;
}

// Styled button component
const StyledButton = styled.button<ButtonProps>`
  background-color: ${colors.buttonRegular};
  padding: 24px 32px;
  border: none;
  ${fonts.H500}
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.buttonHover};
  }

  svg {
    margin-left: 0.5rem;
  }
`;

const ContainerWithHorizontalGap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

// Button component
const Button: React.FC<ButtonProps> = ({ width, text, icon }) => {
  return (
    <StyledButton width={width}>
        <ContainerWithHorizontalGap>
        {text}
      <FontAwesomeIcon icon={icon} />
        </ContainerWithHorizontalGap>
    </StyledButton>
  );
};

export default Button;
