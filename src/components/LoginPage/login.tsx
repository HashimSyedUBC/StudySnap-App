import React, { FormEvent, useContext, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { AuthContext } from '../../Context/authProvider';
import router, { useRouter } from 'next/router';
import supabase from '../../../lib/supabaseClient';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
  margin-top:128px;

  @media (min-width: 1440px) {
    max-width: 1440px;
  }

  @media (min-width: 1920px) {
    max-width: 1920px;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 32px;
  max-width: 480px;
  width: 100%;
`;

const Title = styled.h2`
  ${fonts.Bolded28}
  margin-bottom: 24px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${colors.mainColor};
  border-radius: 4px;
  font-size: 16px;
  ${fonts.H400}

  &:focus {
    border-color: ${colors.hoverBlack};
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${colors.mainColor};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  ${fonts.H400}

  &:hover {
    background-color: ${colors.hoverBlack};
  }
`;

const ToggleLink = styled.a`
  ${fonts.H400}
  color: ${colors.mainColor};
  cursor: pointer;
  text-align: center;
  margin-top: 16px;

  &:hover {
    color: ${colors.hoverBlack};
  }
`;

const fadeInOut = keyframes`
0% { opacity: 0; transform: translateY(-20px); }
10% { opacity: 1; transform: translateY(0); }
90% { opacity: 1; transform: translateY(0); }
100% { opacity: 0; transform: translateY(-20px); }
`;

const ErrorBanner = styled.div<{ isError: boolean }>`
position: fixed;
top: 20px;
transform: translateX(-50%);
background-color: ${props => props.isError ? colors.error || '#ff4444' : colors.success || '#44ff44'};
color: white;
padding: 12px 24px;
border-radius: 4px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
${fonts.H400}
animation: ${fadeInOut} 2s ease-in-out forwards;
z-index: 1000;
`;

const LoginSignupPage: React.FC = () => {
const [isSignup, setIsSignup] = useState(false);
const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);
const authContext = useContext(AuthContext);
const router = useRouter();

if (!authContext) {
  throw new Error('AuthContext must be used within an AuthProvider');
}

const { isLoggedIn } = authContext;

useEffect(() => {
  if (isLoggedIn) {
    router.push("/")
  }
}, [isLoggedIn, router])

useEffect(() => {
  if (message) {
    const timer = setTimeout(() => {
      setMessage(null);
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [message]);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setMessage(null);
  const formData = new FormData(e.currentTarget);
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (isSignup) {
    const confirmPassword = formData.get('confirmPassword') as string;
    if (password !== confirmPassword) {
      setMessage({ text: "Passwords do not match", isError: true });
      return;
    }
  }

  if (!isSignup) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error('Login failed:', error.message);
      setMessage({ text: error.message, isError: true });
    } else {
      console.log('Login successful:', data);
      setMessage({ text: "Login successful", isError: false });
      setTimeout(() => router.push('/'), 2000);
    }
  } else {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      console.error('Signup failed:', error.message);
      setMessage({ text: error.message, isError: true });
    } else {
      console.log('Signup successful:', data);
      setMessage({ text: "Please check your email for confirmation", isError: false });
    }
  }
};

const toggleForm = () => {
  setIsSignup(!isSignup);
  setMessage(null);
};

return (
  <PageContainer>
    {message && <ErrorBanner isError={message.isError}>{message.text}</ErrorBanner>}
    <FormContainer>
      <Title>{isSignup ? 'Sign Up' : 'Log In'}</Title>
      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Email" required />
        <Input name="password" type="password" placeholder="Password" required />
        {isSignup && <Input name="confirmPassword" type="password" placeholder="Confirm Password" required />}
        <Button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</Button>
      </Form>
      <ToggleLink onClick={toggleForm}>
        {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
      </ToggleLink>
    </FormContainer>
  </PageContainer>
);
};

export default LoginSignupPage;