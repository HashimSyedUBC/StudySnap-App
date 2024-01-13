// SelectComponent.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { fonts } from '../../../styles/theme';

interface SelectComponentProps {
    value: string;
    placeholder: string;
    options: any[];
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  padding-right: 2  4px;
  
`;

const StyledLabel = styled.label`
  margin-bottom: 8px;
  ${fonts.H200}
`;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
`;

const StyledSelect = styled.select`
  ${fonts.H500}
  border: none;
  outline: none;
  width: 100%;
  padding-left: 8px;
  @media (min-width: 1920px) {
    height: 40px;
  }
`;



const SelectComponent: React.FC<SelectComponentProps> = ({ value, placeholder, label, onChange, options }) => {
  return (
    <SelectContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <SelectWrapper>
      <StyledSelect value={value} onChange={onChange}>
          <option value="" disabled>{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </SelectContainer>
  );
};

export default SelectComponent;
