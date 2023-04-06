import Card from './Card'
import styles from '../styles/Boton.module.css'

export default function Trabajos(){

    const url1 = 'https://cdn-icons-png.flaticon.com/512/5090/5090482.png'
    const url2 = 'https://cdn-icons-png.flaticon.com/512/7968/7968436.png'
    const url3 = 'https://cdn-icons-png.flaticon.com/512/1840/1840372.png'
    const url4 = 'https://cdn-icons-png.flaticon.com/512/3566/3566674.png'
    const url5 = 'https://cdn-icons-png.flaticon.com/512/10236/10236329.png'
    const url6 = 'https://cdn-icons-png.flaticon.com/512/3938/3938598.png'

    const dimensiones1 = [200, 200]
    const dimensiones2 = [100, 100]
    const dimensiones3 = [100, 100]

    return(
        <section className={styles.sectionGridLayout}>
            <Card
            titulo='Graphic Design'
            urlImg={url1}
            dimensiones={dimensiones1}
            fondo='#5B5F97'
            id={1}
            />
            <Card
            titulo='UI/UX'
            urlImg={url2}
            dimensiones={dimensiones2}
            fondo='#FFA62B'
            id={2}
            />
            <Card
            titulo='Apps'
            urlImg={url3}
            dimensiones={dimensiones2}
            fondo='#E4959E'
            id={3}
            />
            <Card
            titulo='Photography'
            urlImg={url4}
            dimensiones={dimensiones3}
            fondo='#5BC8AF'
            id={4}
            />
            <Card
            titulo='Illustrations'
            urlImg={url5}
            dimensiones={dimensiones3}
            fondo='#F78E69'
            id={5}
            />
            <Card
            titulo='Motion Graphics'
            urlImg={url6}
            dimensiones={dimensiones3}
            fondo='#3E1929'
            id={6}
            />
        </section>
    )
}