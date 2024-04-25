import AnnonceDetail from "../components/AnnonceDetail";
import styles from "./AnnoncesDetails.module.scss";

function AnnoncesDetails() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <AnnonceDetail />
      </div>
    </>
  );
}

export default AnnoncesDetails;
