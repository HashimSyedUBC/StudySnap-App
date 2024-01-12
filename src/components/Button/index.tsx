import React from 'react';
import * as Styled from './styles';
import { ButtonAnimation } from '../ButtonAnimation';

type ButtonProps = {
  theme?: string;
  disabled?: boolean;
  onClick: (value: React.MouseEvent<HTMLButtonElement>) => void;
  buttonIcon: string;
  buttonText: string;
  linkHref?: string;
  width: string;
  height?: string
};

export const Button = ({
  theme,
  disabled,
  onClick,
  buttonIcon,
  buttonText,
  linkHref,
  width,
  height,
}: ButtonProps) => (
  <Styled.ButtonLinkWrapper href={linkHref} width={width}>
    <ButtonAnimation
      height={height}
      id="id"
      onClick={onClick}
      theme={theme}
      disabled={disabled}
    >
      <Styled.ButtonTextWrapper theme={theme}>
        {buttonText}
      </Styled.ButtonTextWrapper>
      <Styled.ButtonIcon className={buttonIcon} theme={theme} />
    </ButtonAnimation>
  </Styled.ButtonLinkWrapper>
);
