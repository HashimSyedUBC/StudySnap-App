import styled from 'styled-components';
import { toRem } from '../../utils/toRem';
import { fonts, colors } from '../../../styles/theme';

type ButtonLinkWrapperProps = {
  width: string;
};

export const ButtonTextWrapper = styled.p`
  ${({ theme }) => (theme === 'TextBoxHome' ? fonts.H200 : fonts.H100)};
  padding-left: ${toRem(10)}; 
  color: ${colors.defaultBlack};
`;

export const ButtonLinkWrapper = styled.a<ButtonLinkWrapperProps>`
  width: ${({ width }) => width};
  text-decoration: none;
  margin-top: -5px;
`;

export const ButtonIcon = styled.i`
  font-size: ${({ theme }) => (theme === 'TextBoxHome' ? toRem(20) : toRem(16))};
  padding-right: ${toRem(10)}; ;
  color: ${colors.defaultBlack}
`;
