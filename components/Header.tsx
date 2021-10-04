import React from "react";
import Link from 'next/link'
import styles from '../styles/components/Header.module.scss'


export function Header(){

    function toggle() {
        const toggleButton = document.querySelector('#btn-mobile')
        const navbarLinks = document.querySelector('#menu')

        let clicks = 0

        toggleButton?.addEventListener('click', () => {
            clicks++
            function isOdd(num: number) { return num % 2;}
            if (isOdd(clicks) == 1) {
                navbarLinks?.setAttribute('style', 'height: auto !important;')
            }else{
                navbarLinks?.setAttribute('style', 'height: 0 !important;')
            }
        })
    }

    return ( <> 
        <header className={styles.container_header}>
            <div className={styles.logo}>
                <Link href="/"><h3>Naped</h3></Link>
            </div>
            <button id="btn-mobile" className={styles.btn} onFocus={() => toggle()}>&#9776;</button>
            <div className={styles.menu} id="menu">
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
        </>
    )
}