
import styles from '../styles/components/Title.module.scss'


export function Title(){
    return(
        <div className={styles.title}>
            <h2>
                Mundo nerd? <br />
                Naped!
            </h2>
            <p>
                O Naped pode ser sua fonte de informações sobre <br />
                o mundo nerd e outros assuntos relacionados.
            </p>
        </div>
    )
}