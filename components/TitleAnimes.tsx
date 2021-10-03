import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { NewsContext } from '../contexts/NewsContext';

import styles from '../styles/components/TitleAnimes.module.scss'


export function TitleAnimes(){
    const {value, search} = useContext(NewsContext)
    const { register, handleSubmit } = useForm();

    async function handleSignIn(data: any) {
        await search(data)
    }

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
            <form className={styles.search} onSubmit={handleSubmit(handleSignIn)}>
                <input type="search" placeholder="Quer ajuda na procura? Pesquise aqui" {...register('value')}/>
            </form>
        </div>
    )
}