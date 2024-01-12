import styled from "styled-components";
import { colors, fonts } from "./theme";

export const Page = styled.div`
    display: flex;
`

export const LeftSection = styled.div`
    background-color: ${colors.defaultBlack};
    width: 35%;
    height: 800px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
`;

export const RightSection = styled.div`
    background-color: ${colors.defaultWhite};
    width: 65%;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
`

export const MainIcon = styled.i`
    color: ${colors.mainColor};
    font-size:100px;


`;

export const CompanyName = styled.span`
    margin-top: 5%;
    color: ${colors.defaultWhite};
    ${fonts.H600}

`

