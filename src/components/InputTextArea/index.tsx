import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

// Define the styled components
const TextAreaWrapper = styled.div`
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

const TextAreaField = styled.textarea<TextAreaFieldProps>`
  padding: 5px;
  border: 1px solid ${props => (props.disabled ? colors.broderGray : colors.defaultBlack)};
  outline: none;
  ${fonts.H200}
  resize: vertical; /* Allows vertical resizing of the textarea */
  background-color: ${props => (props.disabled ? colors.lightGray : 'transparent')};
  color: ${props => (props.disabled ? colors.broderGray : colors.defaultBlack)};
`;

const Asterisk = styled.span`
  color: ${colors.mainColor};
  margin-left: 4px;
  font-size: 18px; // Adjust the size as needed
`;

// Define the Props and State types
interface TextAreaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows: number;
  required?: boolean;
  disabled?: boolean;
}

interface LabelProps {
  disabled?: boolean;
}

interface TextAreaFieldProps {
  disabled?: boolean;
}

const InputTextArea = ({
  value,
  label,
  placeholder,
  rows = 4,
  onChange,
  required = false,
  disabled = false,
}: TextAreaProps) => {
  return (
    <TextAreaWrapper>
      <Label disabled={disabled}>
        {label}
        {required && <Asterisk>*</Asterisk>}
      </Label>
      <TextAreaField
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </TextAreaWrapper>
  );
}

export default InputTextArea;
