import styles from "../styles/Boton.module.css";
import { useState } from "react";

let imagenes = [
  "https://cdn.pixabay.com/photo/2023/03/19/16/15/butterfly-7862893_640.jpg",
  "https://img.freepik.com/premium-vector/print_475148-1270.jpg?size=626&ext=jpg&ga=GA1.1.1596800162.1680610047&semt=ais",
  "https://img.freepik.com/premium-vector/designer-drawing-with-pen-graphic-editor-man-creating-website-user-interface-graphic-design-ui-creative-service-concept-horizontal-full-length-vector-illustration_48369-36707.jpg?size=626&ext=jpg&ga=GA1.1.1596800162.1680610047&semt=ais",
];

export default function SwiperComp() {

  const [divImg1, setDivImg1] = useState({
    height: '100%',
    width: '400px',
    backgroundColor: 'white',
    gridColumnStart: '1',
    gridColumnEnd: '2',
    gridRowStart: '1',
    gridRowEnd: '2',
    id: 1,
    borderRadius: '10px',
    backgroundImage: `url('${imagenes[0]}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })

  const [divImg2, setDivImg2] = useState({
    height: '100%',
    width: '400px',
    backgroundColor: 'blue',
    gridColumnStart: '2',
    gridColumnEnd: '3',
    gridRowStart: '1',
    gridRowEnd: '2',
    borderRadius: '10px',
    backgroundImage: `url('${imagenes[1]}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })

  const [divImg3, setDivImg3] = useState({
    height: '100%',
    width: '400px',
    backgroundColor: 'yellow',
    gridColumnStart: '3',
    gridColumnEnd: '4',
    gridRowStart: '1',
    gridRowEnd: '2',
    borderRadius: '10px',
    backgroundImage: `url('${imagenes[2]}')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  })
  
  const divContenedor = {
    width: '100%',
    height: '300px',
    display: 'grid',
    padding: '10px',
    gap: '10px',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr',
    placeItems: 'center',
    overflowX: 'hidden',
  }

  const estiloContPadre = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '400px',
  }

  const estiloBotones1 = {
    width: '60px',
    height: '60px',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    backgroundColor: 'white',
    backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/318/318477.png')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  }
  const estiloBotones2 = {
   ...estiloBotones1,
   backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/318/318477.png')`,
   transform: 'rotate(180deg)'
  }

  function prev(){
    if(divImg1.id===1){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '3',
        gridColumnEnd: '4',
        id: 3
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '1',
        gridColumnEnd: '2',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '2',
        gridColumnEnd: '3',
      })
    }else if(divImg1.id===2){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '1',
        gridColumnEnd: '2',
        id: 1
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '2',
        gridColumnEnd: '3',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '3',
        gridColumnEnd: '4',
      })
    }else if(divImg1.id===3){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '2',
        gridColumnEnd: '3',
        id: 2
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '3',
        gridColumnEnd: '4',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '1',
        gridColumnEnd: '2',
      })
    }
  }
  function next(){
    if(divImg1.id===1){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '2',
        gridColumnEnd: '3',
        id: 2
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '3',
        gridColumnEnd: '4',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '1',
        gridColumnEnd: '2',
      })
    }else if(divImg1.id===2){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '3',
        gridColumnEnd: '4',
        id: 3
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '1',
        gridColumnEnd: '2',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '2',
        gridColumnEnd: '3',
      })
    }else if(divImg1.id===3){
      setDivImg1({
        ...divImg1,
        gridColumnStart: '1',
        gridColumnEnd: '2',
        id: 1
      })
      setDivImg2({
        ...divImg2,
        gridColumnStart: '2',
        gridColumnEnd: '3',
      })
      setDivImg3({
        ...divImg3,
        gridColumnStart: '3',
        gridColumnEnd: '4',
      })
    }
  }

  const contBotones = {
    display: 'flex',
    gap: '15px'
  }
  
  return (
    <div style={estiloContPadre}>
      <div style={divContenedor}>
        <div style={divImg1}></div>
        <div style={divImg2}></div>
        <div style={divImg3}></div>
      </div>
      <div style={contBotones}>
        <button style={estiloBotones1} className={styles.botonFlechas} onClick={prev}></button>
        <button style={estiloBotones2} className={styles.botonFlechas} onClick={next}></button>
      </div>
    </div>
  )
}
