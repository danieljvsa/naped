import React from "react";
import Link from 'next/link'
import styles from '../styles/components/Footer.module.scss'


export function Footer(){
    return (
        <div className={styles.footer}>
            <h3>Naped</h3>
            <span>
                Todas as imagens de filmes, séries e etc são marcas registradas <br />
                dos seus respectivos proprietários.
            </span>
        </div>
    )
}