import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import {NewsProvider} from '../contexts/NewsContext'
import {makeServer} from '../miragejs'

makeServer()

function MyApp({ Component, pageProps }: AppProps) {
  return( 
    <NewsProvider >
      <Component {...pageProps} />
    </NewsProvider>
  )
}
export default MyApp
