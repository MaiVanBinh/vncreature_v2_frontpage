import React from 'react';
import App, {AppInitialProps} from 'next/app';
import { Provider } from "react-redux";
import {SagaStore, wrapper} from './../container/store';
import { ThemeProvider } from "styled-components";
import theme from '@/utils/theme';
import '@/styles/globals.css'

const MyApp = ({ Component, pageProps,...rest }: any) => {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} /> 
      </ThemeProvider>

    </Provider>
  )
}

export default MyApp;
// Same code in JavaScript (without types)
            
