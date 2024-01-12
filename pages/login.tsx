import React from 'react';
import * as Styled from "../styles/loginStyles"
import GoogleLoginButton from "../src/components/GoogleLoginButton"
export default function Login() {
    return (
        <Styled.Page>
            <Styled.LeftSection>
                <Styled.MainIcon className='fa-solid fa-list-check' />
                <Styled.CompanyName>
                    AppliTrax
                </Styled.CompanyName>
            </Styled.LeftSection>
            <Styled.RightSection>
                <GoogleLoginButton/>
            </Styled.RightSection>
        </Styled.Page>
    )
}