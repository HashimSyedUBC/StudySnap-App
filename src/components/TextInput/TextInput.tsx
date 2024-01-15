import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

// Styled label for the input
const Label = styled.label`
  display: block;
  ${fonts.H200}  
  margin-bottom: 8px; // Space between the label and the input field
`;

// Styled input field
const Input = styled.input`
  ${fonts.H500}
  height: 48px;
  width: 100%; // Full width of the container
  padding: 10px 15px; // Padding inside the input field for a better look
  border: 1px solid black; 
  margin-bottom: 5px; // Space after the input field

  &:focus {
    border-color: #3498db; // Highlight the input field when focused
    box-shadow: 0 0 8px rgba(52, 152, 219, 0.5); // Adding a subtle glow effect
    outline: none; // Remove the default focus outline
  }
`;

const RequiredIndicator = styled.span`
  height: 8px;
  width: 8px;
  display: inline-block;
  margin-left: 8px;
  vertical-align: top; // Aligns the indicator with the middle of the text
`;

// The TextInput component
const TextInput: React.FC<{ label: string; placeholder?: string; required?:
     boolean, value: string, onChange: (e:any) => void }> = ({ label, required, value, onChange, placeholder }) => {
  return (
    <div>
      <Label>
        {label}
        {required && <RequiredIndicator>*</RequiredIndicator>} {/* Display the indicator next to the label text */}
      </Label>
      <Input placeholder={placeholder || ''} required={required} value={value} onChange={onChange}/>
    </div>
  );
};

export default TextInput;