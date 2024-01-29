import '../styles/reset.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="616083465301-jmctdte4f5v9tr8pmps68g8vklgkcrjp.apps.googleusercontent.com">
    <>
      <Script
        src="https://kit.fontawesome.com/2e2ed8649f.js"
        crossOrigin="anonymous"
        async
      />
      <Component {...pageProps} />
    </>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
