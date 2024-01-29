import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';

export const GoogleLogin = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GoogleLoginButton = styled.button`
    background-color: #000000;
    color: white;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
`
export const GoogleLoginImage = styled.img`
    margin-right: 10px;
    width: 20px; // Adjust the width as needed
    height: auto; // This ensures the aspect ratio is maintained
`

export const GoogleLoginDescript = styled.div`
    font-family: 'comfortaa';
    padding-bottom: 1rem;
`