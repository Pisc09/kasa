import { useLocation } from "react-router-dom";
import styles from "./Content.module.scss";
import Hero from "./Hero";
import Annonces from "./Annonces";
import Accordion from "./Accordion";
import Error from "../Error";

function Content({ image, texte }) {
  const location = useLocation();

  return (
    <section className={`container ${styles.container}`}>
      <Hero image={image} texte={texte} />
      {location.pathname === "/apropos" ? (
        <Accordion />
      ) : location.pathname === "/" ? (
        <Annonces />
      ) : (
        <Error />
      )}
    </section>
  );
}

export default Content;
