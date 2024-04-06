import { Link } from "react-router-dom";
import styles from "./Error404.module.scss";

function Errorpage() {
  return (
    <div className={styles.errorContainer}>
      <h2>404</h2>
      <Link to="/">
        <p>Retourner sur la page d’accueil</p>
      </Link>
    </div>
  );
}

export default Errorpage;
