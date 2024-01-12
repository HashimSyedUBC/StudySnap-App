import React from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import { colors, fonts } from '../../../styles/theme';
import ErrorBanner from '../ErrorBanner';

type ModalProps = {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  onConfirm?: () => void
  title?: string
  closeText?: string
  confirmText?: string
  secondConfirm?: () => void
  secondConfirmText?: string
  cancelIcon?: string
  confirmIcon?: string
  secondConfirmIcon?: string
  confirmWidth?: string
  secondConfirmWidth?: string
  errorMessage?: string
};

const ModalWrapper = styled.div<ModalProps>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: -64px;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  max-height: 100vh;
  overflow-y: auto;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${colors.defaultWhite};
  width: fit-content ;
  max-width: 1200px;
  min-width: 400px;
  margin: 100px auto;
  padding: 24px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;


const LaneWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
`;

const TitleStyled = styled.span`
  ${fonts.H400}
  font-size: 24px;
`;

const ButtonWrapper = styled.div<ModalProps>`
  margin-top: 24px;
  display: flex;
  width: 100%;
  justify-content: ${(props) => (props.secondConfirm !== undefined ? 'space-between' : 'center')};
`;


const Modal: React.FC<ModalProps> = ({ errorMessage, confirmWidth, secondConfirmWidth, isOpen, onClose, children, onConfirm, title, closeText, confirmText, secondConfirm, secondConfirmText, cancelIcon, confirmIcon, secondConfirmIcon }) => {
  return (
    <ModalWrapper isOpen={isOpen}>
      <ModalContent>

      <LaneWrapper>
        <TitleStyled>
          {title}
        </TitleStyled>
        {onClose !== undefined && <Button onClick={onClose} buttonText={closeText || 'Cancel'} width='fit-content' buttonIcon={cancelIcon || 'fa-solid fa-x'} height='36px'/>}
      </LaneWrapper>
      <ErrorBanner message={errorMessage || ''} isOpen={errorMessage !== ''}/>

      {children}
      <ButtonWrapper secondConfirm={secondConfirm}>
    
      {secondConfirm !== undefined && <Button onClick={secondConfirm} buttonText={secondConfirmText ||'Confirm'} height='36px' theme='Modal'  width={secondConfirmWidth || '130px'} buttonIcon={secondConfirmIcon || 'fa-solid fa-check'}/>}
      {onConfirm !== undefined && <Button onClick={onConfirm} buttonText={confirmText ||'Confirm'} height='36px' theme='Modal'  width={confirmWidth || '130px'} buttonIcon={confirmIcon || 'fa-solid fa-check'}/>}
      </ButtonWrapper>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
