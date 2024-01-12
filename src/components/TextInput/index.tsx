import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

type InputFieldProps = {
  width: string
}

// Define the styled components
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
`;

const Label = styled.label<LabelProps>`
  ${fonts.H200}
  margin-bottom: 4px;
  color: ${props => (props.disabled ? `${colors.broderGray}` : `${colors.defaultBlack}`)};
`;

const InputField = styled.input<InputFieldProps>`
  padding: 5px;
  border: 1px solid ${colors.defaultBlack};
  outline: none;
  ${fonts.H200}
  width: ${(props) => props.width};

  &:disabled {
    cursor: not-allowed;
    border: 1px solid ${colors.broderGray};
    background-color: ${colors.lightGray};
    color: ${colors.broderGray};
  }
`;

const Asterisk = styled.span`
  color: ${colors.mainColor};
  margin-left: 4px;
  font-size: 18px; // Adjust the size as needed
`;

// Define the Props and State types
type InputProps = {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  disabled?: boolean;
  width?: string
}

type LabelProps = {
  disabled?: boolean; // Include the disabled prop here
}

const InputText = ({ label, placeholder, value, onChange, required = false, disabled = false , width}: InputProps) => {
  return (
    <InputWrapper>
      <Label disabled={disabled}>
        {label}
        {required && <Asterisk>*</Asterisk>}
      </Label>
      < InputField
       width={width || '100%'}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </InputWrapper>
  );
}

export default InputText;
