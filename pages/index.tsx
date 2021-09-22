import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
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
    </div>
  )
}

export default Home
