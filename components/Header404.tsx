import React from "react";
import Link from 'next/link'
import styles from '../styles/components/Header404.module.scss'


export function Header404(){
    return (
        <header className={styles.container_header}>
            <div className={styles.logo}>
                <h3>Naped</h3>
            </div>
            <div className={styles.menu}>
                <ul className={styles.nav}>
                    <li><Link href="#"><a>404</a></Link></li>
                    <li><Link href="#"><a>404</a></Link></li>
                    <li><Link href="#"><a>404</a></Link></li>
                    <li><Link href="#"><a>404</a></Link></li>
                    <li><Link href="#"><a>404</a></Link></li>
                </ul>
            </div>
        </header>
    )
}