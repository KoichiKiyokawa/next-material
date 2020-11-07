import Head from 'next/head'
import type { AppProps } from 'next/app'
import '@/styles/globals.css'

import { Nav } from '@/components/organisms/Nav'

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
