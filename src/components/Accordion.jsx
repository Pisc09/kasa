import { useState } from "react";
import accordions from "../accordiontexts.json";
import styles from "./Accordion.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Accordion() {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const handleAccordionClick = (id) => {
    setOpenAccordionId(openAccordionId === id ? null : id);
  };

  return (
    <div className={styles.accordionsContainer}>
      {accordions.map((accordion) => (
        <article key={accordion.id} className={styles.articles}>
          <h3 onClick={() => handleAccordionClick(accordion.id)}>
            {accordion.title}
            <FontAwesomeIcon
              className={`${styles.rotate} ${
                openAccordionId === accordion.id ? styles.open : styles.close
              }`}
              icon={faChevronDown}
            />
          </h3>
          {openAccordionId === accordion.id && <p>{accordion.description}</p>}
        </article>
      ))}
    </div>
  );
}

export default Accordion;
