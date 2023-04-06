import styles from "../styles/Boton.module.css";
import Boton from "./subcomps/Boton";

export default function FinalLabel() {
  return (
    <section className={styles.finalLavelSection}>
      <div className={styles.contenedorTextoFinalSection}>
        <h4>Contacta conmigo para hablar!</h4>
        <p>
          Me encantaria hablar para saber como puedo ayudarte. El perimero y
          mejor paso para nosotros es hablar sobre tu proyecto en una consulta
          gratuita. Luego podremos seguir a partir de allí.
        </p>
      </div>
      <Boton colorFondo="#f4785a" color="#ffff" />
    </section>
  );
}
