import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

// Define the styled components
const SelectWrapper = styled.div`
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

const SelectField = styled.select<SelectFieldProps>`
  padding: 8px;
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
type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
  width?: string;
};

type LabelProps = {
  disabled?: boolean; // Include the disabled prop here
};

type SelectFieldProps = {
  width?: string;
};

const SelectOption = ({ label, options, onChange, required = false, disabled = false, width }: SelectProps) => {
  return (
    <SelectWrapper>
      <Label disabled={disabled}>
        {label}
        {required && <Asterisk>*</Asterisk>}
      </Label>
      <SelectField width={width || '100%'} onChange={onChange} disabled={disabled}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectField>
    </SelectWrapper>
  );
};

export default SelectOption;
