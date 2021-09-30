import { useContext, useState } from 'react'
import { NewsContext } from '../contexts/NewsContext'
import styles from '../styles/components/News.module.scss'

export function News(){
    const {currentNews, paragraphFirst, paragraphSecond, paragraphThird} = useContext(NewsContext)

    

    return (
        <div className={styles.news}>
            <header className={styles.header}>
                <h2>{currentNews?.title}</h2>
                <p>{currentNews?.miniDescription}</p>
                <span>{currentNews?.date}</span>
            </header>
                {  (Array.isArray(currentNews?.image)) ? 
                        ( <main className={styles.main}>            
                            <div className={styles.pannel} style={{backgroundImage: "url(" + currentNews?.image[0] + ")"}} >  
                                <div>
                                    <p className={styles.tag}>{currentNews?.tag}</p>             
                                </div>
                            </div>
                            <p className={styles.paragraph}>
                                {paragraphFirst}
                            </p>
                            <p className={styles.paragraph}>
                                {paragraphSecond}
                            </p>
                            <div className={styles.pannel} style={{backgroundImage: "url(" + currentNews?.image[1] + ")"}} >  
                                <p className={styles.tag}>{currentNews?.tag}</p>             
                            </div>
                            <p className={styles.paragraph}>
                                {paragraphThird}
                            </p>
                        </main>
                        ) : (     
                            <main className={styles.main}>                          
                                <div className={styles.pannel} style={{backgroundImage: "url(" + currentNews?.image + ")"}} >  
                                    <div>
                                        <p className={styles.tag}>{currentNews?.tag}</p>       
                                    </div>     
                                </div>
                                <p className={styles.paragraph}>
                                    {paragraphFirst}
                                </p>
                                <p className={styles.paragraph}>
                                    {paragraphSecond}
                                </p>
                                <p className={styles.paragraph}>
                                    {paragraphThird}
                                </p>
                            </main>
                        )
                    }
               
                
            
        </div>
    )
}