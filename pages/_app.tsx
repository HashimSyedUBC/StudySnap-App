import '../styles/reset.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  div {
    border-radius: 10px; // Set the radius as per your design
  }
  button {
    border-radius: 10px; // Set the radius as per your design
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <GlobalStyle />
      <Script
        src="https://kit.fontawesome.com/2e2ed8649f.js"
        crossOrigin="anonymous"
        async
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
