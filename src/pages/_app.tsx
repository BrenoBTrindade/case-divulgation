import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from '../styles/globalstyle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
        <GlobalStyle/>
        <Component {...pageProps} />
    </React.Fragment>
  ) 
}
