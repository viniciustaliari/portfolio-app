import { useContext } from 'react'
import styles from '../../styles/Boton.module.css'
import { contextoModal } from '@/Contexto'

export default function Boton({ colorFondo, color }){

    const { showModal, setShowModal } = useContext(contextoModal)

    const handleClick = ()=>{
        setShowModal(true)
    }

    const estilo = {
        height: '50px',
        width: '100%',
        maxWidth: '200px',
        minWidth: '150px',
        backgroundColor: colorFondo,
        border: 'none',
        borderRadius: '30px',
        fontSize: '0.95rem',
        color: color,
    }

    console.log(styles.boton)

    return(
        <button 
        className={styles.boton} 
        style={estilo}
        onClick={handleClick}
        >Consulta Gratis</button>
    )
}
