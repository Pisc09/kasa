import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../images/logo-kasa.svg";

function Header() {
  return (
    <header className={`${styles.header}`}>
      <div className={styles.container}>
        <img src={logo} />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/apropos">A Propos</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
