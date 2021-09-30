import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { News } from '../../components/News'
import { RecentNews } from '../../components/RecentNews'

import styles from '../../styles/pages/News.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Naped | Codelândia</title>
      </Head>
      <div className={styles.larguraMaximaContainer}>
        <Header />
      </div>
      <main className={styles.larguraMaximaContainer}>
        <News />
        <RecentNews />
      </main>     
      <footer className={styles.larguraMaximaContainer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
