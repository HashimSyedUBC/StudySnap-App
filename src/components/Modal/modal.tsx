import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

// Styled components for the modal
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  min-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const ModalTitle = styled.h2`
  ${fonts.Bolded28}
  margin: 0;
  margin-bottom: 48px;
`;

const ButtonWrapper = styled.div`
    margin-top: 48px;
`;


interface ButtonCon {
    singleButton: boolean
  }

const ButtonContainer = styled.div<ButtonCon>`
  display: flex;
  justify-content: ${props => props.singleButton ? 'center' : 'space-between'};
`;

interface ModalProps {
    title: string;
    children: React.ReactNode; 
    confirmText: string;
    onCancelText?: string;
    onConfirm: () => void;
    onCancel?: () => void;
    oneButton?: boolean;
  }
// Modal Component
const Modal = ({
  title,
  children,
  confirmText,
  onCancelText,
  onConfirm,
  onCancel = () => console.log(''),
  oneButton = false
}: ModalProps) => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ButtonContainer singleButton={oneButton}>
          {!oneButton && (
            <ButtonWrapper>
            <Button isSubmit text={onCancelText || ''} onClick={onCancel} width="100%" icon={faX}/>
            </ButtonWrapper>
          )}
          <ButtonWrapper>
          <Button isSubmit text={confirmText} onClick={onConfirm} icon={faCheck} width='100%'/>
          </ButtonWrapper>
        </ButtonContainer>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;