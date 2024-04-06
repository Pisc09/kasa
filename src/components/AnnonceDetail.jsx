import { useState } from "react";
import { useParams } from "react-router-dom";
import Error from "../Error";
import annonces from "../annonces.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./AnnonceDetail.module.scss";

function AnnonceDetail() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenEquipments, setIsOpenEquipments] = useState(false);

  const { id } = useParams();
  const annonce = annonces.find((a) => a.id === id);
  if (annonce === undefined) {
    return <Error />;
  }

  let location = annonce.location.split(" - ")[0];

  const handlePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + annonce.pictures.length) %
        annonce.pictures.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % annonce.pictures.length);
  };

  return (
    <div className={styles.annonceDetailContainer}>
      <div className={styles.slide}>
        <img
          src={annonce.pictures[currentImageIndex]}
          alt={`Slide ${currentImageIndex}`}
        />
        {annonce.pictures.length > 1 && (
          <div className={styles.slideBtnCount}>
            <span className={styles.divVide}></span>
            <div className={styles.slideBtn}>
              <button onClick={handlePrev}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button onClick={handleNext}>
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
            <div className={styles.spanCount}>
              <span>
                {currentImageIndex + 1}/{annonce.pictures.length}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={styles.villePersonne}>
        <div className={styles.ville}>
          <h2>{annonce.title}</h2>
          <p>{location}</p>
          <div className={styles.tagSpan}>
            {annonce.tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        </div>
        <div className={styles.personne}>
          <div className={styles.nom}>
            <h3>{annonce.host.name}</h3>
            <img src={annonce.host.picture} />
          </div>
          <div className={styles.stars}>
            {Array(5)
              .fill()
              .map((_, i) => (
                <span
                  key={i}
                  className={`star ${i < annonce.rating ? "filled" : ""}`}
                  style={{ color: i < annonce.rating ? "orange" : "gray" }}
                >
                  ★
                </span>
              ))}
          </div>
        </div>
      </div>
      <div className={styles.accordions}>
        <div className={styles.description}>
          <h3 onClick={() => setIsOpenDescription(!isOpenDescription)}>
            Description
            <FontAwesomeIcon
              className={`${styles.rotate} ${
                isOpenDescription ? styles.open : styles.close
              }`}
              icon={faChevronDown}
            />
          </h3>
          {isOpenDescription && <p>{annonce.description}</p>}
        </div>
        <div className={styles.equipments}>
          <h3 onClick={() => setIsOpenEquipments(!isOpenEquipments)}>
            Équipements
            <FontAwesomeIcon
              className={`${styles.rotate} ${
                isOpenEquipments ? styles.open : styles.close
              }`}
              icon={faChevronDown}
            />
          </h3>
          {isOpenEquipments && (
            <ul>
              {annonce.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnnonceDetail;
