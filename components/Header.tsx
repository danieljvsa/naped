import React from "react";
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'


export function Header(){
    return (
        <header className={styles.container_header}>
            <div className={styles.logo}>
                <h3>Naped</h3>
            </div>
            <div className={styles.menu}>
                <ul className={styles.nav}>
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="#"><a>Séries</a></Link></li>
                    <li><Link href="#"><a>Filmes</a></Link></li>
                    <li><Link href="/animes"><a>Animes</a></Link></li>
                    <li><Link href="#"><a>Games</a></Link></li>
                </ul>
                <div>
                    <button><Link href="#">Minha Conta</Link></button>
                </div>
            </div>
        </header>
    )
}