import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'
import React, { useContext } from 'react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Header404 } from '../../components/Header404'
import { News } from '../../components/News'
import { RecentNews } from '../../components/RecentNews'
import { Title404 } from '../../components/Title404'
import { NewsContext } from '../../contexts/NewsContext'

import styles from '../../styles/pages/News.module.scss'

const Home: NextPage = () => {
  const {currentNews} = useContext(NewsContext)

  return (
    <div className={styles.container}>
      <Head>
        <title>Naped | Codelândia</title>
      </Head>
      {(currentNews) ?  ( 
        <>
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
        </>
      ) : (
        <>
          <div className={styles.larguraMaximaContainer}>
            <Header404 />
          </div>
          <main className={styles.larguraMaximaContainer}>
            <Title404 />
          </main>
        </>
      )}     
      
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {['naped-value']: isNews} = parseCookies(ctx)

  if (!isNews) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }

    }

  }

  return{
    props: {}
  }
}

export default Home

