import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import * as Styled from './styles';

const LoginPage: React.FC = () => {
    const googleLogin = useGoogleLogin({
        onSuccess: (tokenResponse) => console.log(tokenResponse),
        onError: () => console.log('Login Failed'),
        // Additional configuration options if needed
    });

    return (
        <Styled.GoogleLogin>
            <Styled.GoogleLoginDescript>
                Login / Sign up with your Google account
            </Styled.GoogleLoginDescript>
            <Styled.GoogleLoginButton onClick={() => googleLogin()}>
                <Styled.GoogleLoginImage src = 'https://www.svgrepo.com/show/475656/google-color.svg'>
                </Styled.GoogleLoginImage>
                    Continue with Google
            </Styled.GoogleLoginButton>
        </Styled.GoogleLogin>

    );
};

export default LoginPage;
