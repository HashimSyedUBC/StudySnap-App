import React, { useState } from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
  onChange: (isChecked: boolean) => void;
}

const CheckboxWrapper = styled.label`
  display: flex;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div`
  width: 16px;
  height: 16px;
  min-width: 36px;
  min-height: 36px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding: 10px;
`;
const Checkmark = styled.span`
  width: 15px;
  height: 25px;
  border: 1px solid #000;
  border-top: none;
  border-left: none; /* Change border-right to border-left */
  transform: ${(props: { isChecked: boolean }) =>
    props.isChecked ? 'rotate(41deg)' : 'none'}; /* Rotate clockwise */
  display: inline-block;
  position: relative;
  left: -10px;
  top: -2px;
  visibility: ${(props: { isChecked: boolean }) => (props.isChecked ? 'visible' : 'hidden')};
  transform-origin: bottom right; /* Adjust the transform origin for correct rotation */
`;
const Checkbox: React.FC<CheckboxProps> = ({ checked, onChange }) => {
  const handleChange = () => {
    onChange(!checked);
  };

  return (
    <CheckboxWrapper>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <StyledCheckbox>
        <Checkmark isChecked={checked} />
      </StyledCheckbox>
    </CheckboxWrapper>
  );
};

export default Checkbox;