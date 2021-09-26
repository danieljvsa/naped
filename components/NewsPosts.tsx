
import React, { useContext } from 'react'
import styles from '../styles/components/NewsPosts.module.scss'
import Link from 'next/link'
import { NewsContext } from '../contexts/NewsContext'

export function NewsPosts(){
    const { newsDay } = useContext(NewsContext)
    return(
        <div className={styles.movies_pannel}>
            {newsDay?.map((news) => (
            <div className={styles.pannel} key={news.id}>
                <div className={styles.img_pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + news.image + ")"}}>
                    <p className={styles.tag}>{news.tag}</p>
                </div>
                <div className={styles.content}>
                    <h4>
                       {news.title}
                    </h4>
                    <p>
                        {news.miniDescription}
                    </p>
                    <span>
                        {news.date}
                    </span>
                    <button>
                        <Link href="#">Ler Noticia</Link>
                    </button>
                </div>
            </div> 
            ))}
            
        </div>
    )
}