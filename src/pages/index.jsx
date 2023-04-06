import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import FinalLabel from '../components/FinalLabel'
import Trabajos from '../components/Trabajos'
import SwiperComp from '../components/SwiperComp'
import HeaderComp from '../components/HeaderComp'
import AboutComp from '../components/AboutComp'
import TextComp from '../components/TextComp'
import Modal from '../components/Modal'
import { useContext } from 'react'
import { contextoModal } from '@/Contexto'

export default function Home() {
  
  const { showModal } =useContext(contextoModal)

  return (
    <>
      <Head>
        <title>Ammy Design</title>
        <meta name="description" content="A designer portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {showModal && <Modal/>}
        <HeaderComp/>
        <TextComp/>
        <Trabajos/>
        <AboutComp/>
        <SwiperComp/>
        <FinalLabel/>
        <HeaderComp/>
      </main>
    </>
  )
}
