
import React from 'react'
import styles from '../styles/components/WeekNews.module.scss'
import Link from 'next/link'

export function WeekNews(){
    return(
        <div className={styles.week_pannel}>
            <div className={styles.title}>
                <h4>Notícias da Semana</h4>
            </div>
            <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/aot.svg" + ")"}}>  
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla eros tellus, malesuada et velit in, blandit molestie 
                    dolor.
                </p>
            </div>
            <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/aot.svg" + ")"}}>  
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla eros tellus, malesuada et velit in, blandit molestie 
                    dolor.
                </p>
            </div>
            <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/aot.svg" + ")"}}>  
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla eros tellus, malesuada et velit in, blandit molestie 
                    dolor.
                </p>
            </div>
        </div>
    )
}