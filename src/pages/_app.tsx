import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import '@fontsource/poppins'
import '@fontsource/quicksand'

const MyApp = ({
  Component, pageProps
}: AppProps) =>
  <>
    <Head>
      <title>TypeScript Apps</title>
    </Head>
    <ChakraProvider>
      <Component {...pageProps} h="100vh"/>
    </ChakraProvider>
  </>

export default MyApp
