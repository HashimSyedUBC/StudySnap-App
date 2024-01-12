import '../styles/reset.css';
import '../styles/fonts.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
