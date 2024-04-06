import LgKasaW from "../images/logo-kasa-white.svg";
import style from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={`${style.footer}`}>
      <img src={LgKasaW} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
