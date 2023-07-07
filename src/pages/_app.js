import Head from 'next/head';
import React, { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SSRProvider from '../../node_modules/react-bootstrap/SSRProvider';
import Header from '../../components/header/index.js';
import Footer from "../../components/footer";
import '../styles/style.css';
import '../styles/tab.css';
import '../styles/scrollbar.css';
import '../styles/responsive.css';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { asPath } = router;
  const noNav = ['/login', '/login-as-worker', '/login-as-company', '/register', '/register-as-worker', '/register-as-company', '/forgot-password-worker', '/reset-password-worker', '/forgot-password-company', '/reset-password-company'];
  return (
    <>

      <SSRProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        {noNav.includes(asPath) ? null : <Header />}
        <Component {...pageProps} />
        {noNav.includes(asPath) ? null : <Footer />}
      </SSRProvider>
    </>

  )
}

export default MyApp; 