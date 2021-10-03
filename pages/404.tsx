import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import { Header404 } from '../components/Header404'
import { Title404 } from '../components/Title404'
import styles from '../styles/pages/404.module.scss' 


const Home: NextPage = () => {
    return(
        <div className={styles.container}>
            <Head>
                <title>Naped | Codelândia</title>
            </Head>
            <div className={styles.larguraMaximaContainer}>
                <Header404 />
                <Title404 />
            </div>
        </div>
    )
}

export default Home