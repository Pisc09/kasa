import { Link } from "react-router-dom";
import annonces from "../annonces.json";
import styles from "./Annonces.module.scss";

function Annonces() {
  return (
    <div className={styles.annoncesContainer}>
      {annonces.map((annonce) => (
        <Link key={annonce.id} to={`/logement/${annonce.id}`}>
          <div className={styles.annonceCard}>
            <img src={annonce.cover} alt={annonce.title} />
            <h2>{annonce.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Annonces;
