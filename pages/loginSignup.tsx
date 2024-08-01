import React from 'react';
import Header from '../src/components/Header/header';
import FooterComponent from '../src/components/footer/footer';
import LoginSignupPage from '../src/components/LoginPage/login';
export default function Login() {
    return (
        <>
        <Header />
        <LoginSignupPage />
        <FooterComponent />
        </>
    )
}