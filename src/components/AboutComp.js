import styles from '../styles/Boton.module.css'
import Boton from './subcomps/Boton'

export default function AboutComp(){
    return(
        <section className={styles.sectionNav}>
            <div className={styles.contenedorImgPerfil}></div>
            <div className={styles.contTextoPerfil}>
                <h2>Hola soy Ammy, y me encantaria trabajar en tu siguiente proyecto</h2>
                <p>Me encanta trabajar con otras personas
                    para crear increíbles soluciones de diseño.
                    He diseñado de todo, desde logo para algunas marcas
                    como aplicaciones móviles completas.
                    Además me manejo con las cámaras!
                </p>
                <Boton colorFondo='#e44b5d' color='white'/>
            </div>
        </section>
    )
}