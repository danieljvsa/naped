import Link from 'next/link'
import React from 'react'
import styles from '../styles/components/Title404.module.scss'


export function Title404(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h2>
                    Tenho más notícias <br />
                    para você!
                </h2>
                <p>
                    A página que você está procurando pode ter sido <br />
                    removida ou está temporariamente indisponível.
                </p>
                <button>
                    <Link href="/">
                        Voltar a Home
                    </Link>
                </button>
            </div>
            <div className={styles.content}>
                <img src="/movies/404.svg" alt="404" />
                <p>
                    Ups! Você chegou no espaço... <br /> 
                    volte para o mundo nerd!
                </p>
            </div>
        </div>
        
    )
}