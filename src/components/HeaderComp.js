import styles from '../styles/Boton.module.css'
import Boton from './subcomps/Boton'

export default function HeaderComp(){
    return(
        <nav className={styles.navBar}>
            <a href='/'>
                <div className={styles.cuadradoNav}>
                    <div className={styles.circuloNav}></div>
                </div>
            </a>
            <Boton colorFondo='black' color='white'/>
        </nav>
    )
}