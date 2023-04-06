import React, {createContext, useState} from 'react'

export const contextoModal = React.createContext();

export default function Contexto({ children }){

    const [showModal, setShowModal] =  useState(false)

    return(
        <contextoModal.Provider value={{showModal, setShowModal}}>
            {children}
        </contextoModal.Provider>
    )
}