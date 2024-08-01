import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fonts, colors } from '../../../styles/theme';

interface ButtonProps {
  width?: string;
  text: string;
  icon?: IconDefinition;
  onClick: () => void;
  isSubmit?: boolean;
  disabled?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props => props.disabled ? colors.grey : colors.mainColor};
  color: ${colors.white};
  padding: ${props => props.isSubmit ? '8px 16px' : '12px 24px'};
  ${props => props.isSubmit ? fonts.H400 : fonts.H500};
  border: none;
  border-radius: 8px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: ${props => props.width || 'auto'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover:not(:disabled) {
    background-color: ${colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  svg {
    margin-right: ${props => props.text ? '8px' : '0'};
  }
  min-width: fit-content;
  gap: 16px;
`;

const Button: React.FC<ButtonProps> = ({ width, text, icon, onClick, isSubmit, disabled }) => {
  return (
    <StyledButton
      width={width}
      onClick={onClick}
      isSubmit={isSubmit}
      disabled={disabled}
      type={isSubmit ? 'submit' : 'button'}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </StyledButton>
  );
};

export default Button;