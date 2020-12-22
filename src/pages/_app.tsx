import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { Nav } from '@/components/organisms/Nav'

import Amplify from 'aws-amplify'
import awsExports from '../aws-exports'
Amplify.configure(awsExports)

const HEADER_HEIGHT = 64
const HEADER_MARGIN = 20

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </Head>
    <Nav />
    <div style={{ height: `${HEADER_HEIGHT + HEADER_MARGIN}px` }}></div>
    <main style={{ width: '95%', maxWidth: '640px', margin: 'auto' }}>
      <Component {...pageProps} />
    </main>
  </>
)

export default App
