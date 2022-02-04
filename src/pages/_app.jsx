import React, { useEffect } from 'react';
import { SSRProvider, OverlayProvider } from 'react-aria';
import '../styles/globals.css'
import '../styles/nprogress.css';
import '../styles/chrome-bug.css';

import NProgress from '../components/elements/nprogress';
import ResizeHandler from '../components/elements/resize-handler';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  return (
    <SSRProvider>
      <OverlayProvider>
        <Component {...pageProps} />
        <ResizeHandler />
        <NProgress />
      </OverlayProvider>
    </SSRProvider>
  );
}

export default MyApp
