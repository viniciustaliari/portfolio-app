import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Boton.module.css'

export default function Card({ titulo, dimensiones, urlImg, fondo, id}){

    const estilo = {
        backgroundColor: fondo,
        padding: '20px',
        borderRadius: '10px',
        fontSize: '1.2rem',
        display: 'flex',
        flexDirection: 'column'
    }

    const [clase, setClase] =  useState('')
    useEffect(()=>{
        switch(id){
            case 1: setClase(styles.primerCard)
            break
            case 2: setClase(styles.segundoCard)
            break
            case 3: setClase(styles.tercerCard)
            break
            case 4: setClase(styles.cuartoCard)
            break
            case 5: setClase(styles.quintoCard)
            break
            case 6: setClase(styles.sextoCard)
            break
        }
    },[])

    return(
        <div style={estilo} className={`${clase} ${styles.contenedoresIconos}`}>
            <Image
            className={styles.imagenCard}
            src={urlImg}
            width={dimensiones[0]}
            height={dimensiones[1]}
            alt='Imagen de fondo del tipo de trabajo'
            />
            <h4 className={styles.h4Grid}>{titulo}</h4>
        </div>
    )
}