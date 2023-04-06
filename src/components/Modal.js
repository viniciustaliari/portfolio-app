import { useContext, useEffect, useState } from 'react'
import styles from '../styles/Modal.module.css'
import { contextoModal } from '@/Contexto'

export default function Modal(){

    const [word, setWorld] = useState('Contactar')
    const [word2, setWorld2] = useState('E-mail')
    const [email, setEmail] = useState('')
    const [mostrar, setMostrar] =  useState({
        display: 'none'
    })

    const {showModal, setShowModal} = useContext(contextoModal)

    useEffect(()=>{
        if(showModal){
            setMostrar({display: 'flex'})
        }else if(!showModal){
            setMostrar({display: 'none'})
        }
    },[showModal])
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setWorld('Enviado!')
        setWorld2('E-mail')
    }

    const handleChange = (e)=>{
        setEmail(e.target.value)
        console.log(email)
    }

    const handleCerrar = ()=>{
        setShowModal(false)
    }

    return(
        <form 
        className={styles.divModal} 
        onSubmit={handleSubmit}
        style={mostrar}
        >
            <button 
            className={styles.botonCerrar}
            onClick={handleCerrar}
            >X</button>
            <input 
            type='email' 
            placeholder={word2} 
            className={styles.input} 
            value={email}
            onChange={handleChange}
            />
            <button type='submit' 
            className={styles.boton} 
            placeholder='Contactar'
            >{word}</button>
        </form>
    )
}