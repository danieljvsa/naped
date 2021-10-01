import Link from 'next/link'
import React, { useContext } from 'react'
import { NewsContext } from '../contexts/NewsContext'
import styles from '../styles/components/MoviesPannel.module.scss'

export function MoviesPannel(){
    const {newsHeader, activeCurrentNews} = useContext(NewsContext)
    return(
        <div className={styles.movies_pannel}>
            {(newsHeader != null) ? (
                <div className={styles.principal_pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + newsHeader[0].image + ")"}}>
                    <p className={styles.tag}>{newsHeader[0].tag}</p>
                    <h4 className={styles.title}  onClick={() => (activeCurrentNews(newsHeader[0]))}>
                        <Link href={`/news/${newsHeader[0].id}`}>{newsHeader[0].title}</Link>
                    </h4>
                </div>
            ) : (
                <div className={styles.principal_pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/aot.svg" + ")"}}>
                    <p className={styles.tag}>Lorem ipsum</p>
                    <h4 className={styles.title}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla eros tellus, malesuada et velit in, blandit molestie 
                        dolor.
                    </h4>
                </div>
            )}
            <div className={styles.secondary_pannel}>
                {(newsHeader != null) ? (
                    <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + newsHeader[1].image + ")"}}>                       
                        <p className={styles.tag}>{newsHeader[1].tag}</p>
                        <h4 className={styles.title} onClick={() => (activeCurrentNews(newsHeader[1]))}>
                            <Link href={`/news/${newsHeader[1].id}`}>{newsHeader[1].title}</Link>
                        </h4>
                    </div>
                ) : (
                    <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/lol.svg" + ")"}}>
                        <p className={styles.tag}>Lorem ipsum</p>
                        <h4 className={styles.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla eros tellus, malesuada et velit in, blandit molestie 
                            dolor.
                        </h4>
                    </div>
                )}
                {(newsHeader != null) ? (
                    <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + newsHeader[2].image + ")"}}>                       
                        <p className={styles.tag} >{newsHeader[2].tag}</p>
                        <h4 className={styles.title} onClick={() => (activeCurrentNews(newsHeader[2]))}>
                            <Link href={`/news/${newsHeader[2].id}`}>{newsHeader[2].title}</Link>
                        </h4>
                    </div>
                ) : (
                    <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/lol.svg" + ")"}}>
                        <p className={styles.tag}>Lorem ipsum</p>
                        <h4 className={styles.title}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nulla eros tellus, malesuada et velit in, blandit molestie 
                            dolor.
                        </h4>
                    </div>
                )}
            </div>
        </div>
    )
}