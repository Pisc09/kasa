import { useLocation } from "react-router-dom";
import styles from "./Hero.module.scss";

function Hero({ image, texte }) {
  const location = useLocation();
  const isAproposPage = location.pathname === "/apropos";

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <img
          src={image}
          alt="Hero Home"
          className={isAproposPage ? styles.aproposImage : styles.defaultImage}
        />
        <h1>{texte}</h1>
      </div>
    </section>
  );
}

export default Hero;
