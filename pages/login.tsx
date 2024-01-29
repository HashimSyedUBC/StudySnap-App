import * as Styled from "../styles/loginStyles"
import React from 'react';
import styled from 'styled-components';
import { colors, fonts} from '/Users/admin/StudySnap-App/styles/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faB, faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import GoogleLoginButton from "../src/components/GoogleLoginButton"



export default function Login() {
    return (
        <Styled.Page>
            <Styled.LeftSection>
                <Styled.IconStyled icon={faBookOpen} />
                <Styled.CompanyName>
                    StudySnap
                </Styled.CompanyName>
            </Styled.LeftSection>
            <Styled.RightSection>
                <GoogleLoginButton/>
            </Styled.RightSection>
        </Styled.Page>
    )
}