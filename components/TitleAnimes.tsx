import styles from '../styles/components/TitleAnimes.module.scss'


export function TitleAnimes(){
    return(
        <div>
            <div className={styles.title}>
                <h2>
                    Animes
                </h2>
                <p>
                    O Naped pode ser sua fonte de informações sobre <br />
                    o mundo nerd e outros assuntos relacionados.
                </p>
            </div>
            <div className={styles.search}>
                <input type="search" placeholder="Quer ajuda na procura? Pesquise aqui" />
            </div>
        </div>
    )
}