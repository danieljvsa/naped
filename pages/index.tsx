import type { NextPage } from 'next'
import Head from 'next/head'
import {} from 'jquery';
import React, { useEffect, useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { MoviesPannel } from '../components/MoviesPannel'
import { NewsPosts } from '../components/NewsPosts'
import { RecentNews } from '../components/RecentNews'
import { Title } from '../components/Title'
import { WeekNews } from '../components/WeekNews'

import styles from '../styles/pages/Home.module.scss'

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
        <Title />
        <MoviesPannel />
        <div className={styles.news_posts}>
            <NewsPosts />
            <WeekNews />
        </div>
        <RecentNews />
      </main>
      <footer className={styles.larguraMaximaContainer}>
        <Footer />
      </footer>
      
    </div>
  )
}

export default Home
