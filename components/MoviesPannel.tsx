
import styles from '../styles/components/MoviesPannel.module.scss'

export function MoviesPannel(){
    return(
        <div className={styles.movies_pannel}>
            <div className={styles.principal_pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/walking-dead.svg" + ")"}}>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nulla eros tellus, malesuada et velit in, blandit molestie 
                    dolor.
                </p>
            </div>
            <div className={styles.secondary_pannel}>
                <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/aot.svg" + ")"}}>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla eros tellus, malesuada et velit in, blandit molestie 
                        dolor.
                    </p>
                </div>
                <div className={styles.pannel} style={{backgroundImage: "linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(" + "/movies/lol.svg" + ")"}}>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla eros tellus, malesuada et velit in, blandit molestie 
                        dolor.
                    </p>
                </div>
            </div>
        </div>
    )
}