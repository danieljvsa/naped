
import React, { useContext } from 'react'
import styles from '../styles/components/WeekNews.module.scss'
import Link from 'next/link'
import { NewsContext } from '../contexts/NewsContext'

export function WeekNews(){
    const {newsWeek, activeCurrentNews} = useContext(NewsContext)
    return(
        <div className={styles.week_pannel}>
            <div className={styles.title}>
                <h4>Notícias da Semana</h4>
            </div>
            <div className={styles.news}>
                {newsWeek?.map((news) => (
                    <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image + ")"}} key={news.id}>  
                        <p className={styles.tag}>{news.tag}</p>
                        <p onClick={() => (activeCurrentNews(news))}>
                            <Link href={`/news/${news.id}`}>{news.title}</Link>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}