
import React from 'react'
import styles from '../styles/components/NewsPosts.module.scss'
import Link from 'next/link'

export function NewsPosts(){
    return(
        <div className={styles.movies_pannel}>
            <div className={styles.pannel}>
                <div className={styles.img_pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/walking-dead.svg" + ")"}}>
                </div>
                <div className={styles.content}>
                    <h4>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla eros tellus, malesuada et velit in, blandit molestie 
                        dolor.
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor...
                    </p>
                    <span>
                        00/00/0000
                    </span>
                    <button>
                        <Link href="#">Ler Noticia</Link>
                    </button>
                </div>
            </div> 
            
        </div>
    )
}