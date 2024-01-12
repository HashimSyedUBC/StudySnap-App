import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

export const FooterWrapper = styled.div`
    height: 48px;
    @media (min-width: 1080px) {
        height: 64px;
    }
    display: flex;
    width: 100%;
    background-color: ${colors.mainColor};
    justify-content: center;
    align-content: center;
    position: fixed;
    left: 0;
    bottom: 0;
    text-align: center;
`;

export const InnerFooterWrapper = styled.div`
    display: flex;
    align-items: center;
    min-width: 100%;
    padding-left: 64px;
    padding-right: 64px;
    justify-content: space-between;
`;

export const FooterIconWrapper = styled.span`
    display: flex;
    gap: 24px;
    @media (min-width: 1080px) {
        gap: 48px;
    }
`;

export const IconStyled = styled.i`
    font-size: 24px;
    @media (min-width: 1080px) {
        font-size: 32px;
    }
`;

export const IconWrapper = styled.div`
    ${fonts.H300};
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const StyledButton = styled.button`
    background-color: ${colors.mainColor};
    border: none;
    &:hover {
        color: white;
    }
`;
