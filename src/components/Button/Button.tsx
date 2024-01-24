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
  onClick: () => void
  isSubmit?: boolean
  disabled?: boolean
}

// Styled button component
const StyledButton = styled.button<ButtonProps>`
  background-color: ${colors.buttonRegular};
  padding: ${({ isSubmit }) => (isSubmit ? '8px 16px' : '16px 24px')};
  ${({ isSubmit }) => (isSubmit ? fonts.H400 : fonts.H500)};
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, color 0.3s;

  &:hover {
    background-color: ${colors.buttonHover};
    transform: scale(1.02); // Slightly increase the size of the button
    box-shadow: 0 5px 15px ${colors.shadowOrange}; // Add a shadow for depth
  }

  &:disabled {
    background-color: ${colors.grey};
  }

 
`;

const ContainerWithHorizontalGap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
`;

// Button component
const Button: React.FC<ButtonProps> = ({disabled, width, text, icon, onClick, isSubmit}) => {
  return (
    <StyledButton disabled={disabled} width={width} onClick={onClick} isSubmit={isSubmit}>
        <ContainerWithHorizontalGap>
        {text}
      <FontAwesomeIcon icon={icon} />
        </ContainerWithHorizontalGap>
    </StyledButton>
  );
};

export default Button;
