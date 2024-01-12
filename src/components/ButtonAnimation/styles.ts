import styled from 'styled-components';
import { colors } from '../../../styles/theme';
import { toRem } from '../../utils/toRem';

type ButtonProps = {
  readonly theme?: string;
  readonly height?: string;
};

type BackgroundAnimationProps = {
  readonly theme?: string;
};

export const BackgroundAnimation = styled.div<BackgroundAnimationProps>`
  position: absolute;
  transition: all 0.2s linear;
  z-index: -2;
  width: 100%;
  height: 100%;
  background: ${colors.defaultWhite};
  border-bottom: 1px solid ${colors.mainColor};
`;

export const ButtonStyled = styled.button<ButtonProps>`
  height: ${({ height }) => (height || 'auto')};;
  z-index: 0;
  border: none;
  width: max-content;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.2s linear;
  overflow: hidden;
  background: ${colors.mainColor};
  color: ${({ theme }) => (theme === 'TextSection' ? colors.mainColor : colors.defaultBlack)};
  p {
    transition: all 0.2s linear;
  }
  i {
    transition: all 0.2s linear;
    margin: 0 0 0 ${toRem(12)};
  }

  ${BackgroundAnimation} {
    transform: translateY(-100%);
  }

  padding: ${toRem(16)} 0;

  &:hover {
    padding: ${toRem(16)} ${toRem(16)} ${toRem(16)} 0;
    transition: all 0.1s linear;
    color: ${colors.mainColor};
    p {
      transition: all 0.1s linear;
      padding: 0 0 0 ${toRem(12)};
    }
    i {
      transition: all 0.1s linear;
    }
    ${BackgroundAnimation} {
      transform: translateY(0%);
    }
  }

  &:disabled {
    color: ${colors.broderGray};
    border: none;
  }
`;
