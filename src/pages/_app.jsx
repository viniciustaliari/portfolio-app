import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Contexto from '../Contexto'

export default function App({ Component, pageProps }) {
  return(
    <Contexto>
      <Component {...pageProps} />
    </Contexto>
  )
}
