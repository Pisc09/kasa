import Content from "./components/Content";
import styles from "./Apropos.module.scss";
import mga from "./images/img-hero-a-propos.png";

function Apropos() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <Content image={mga} />
      </div>
    </>
  );
}

export default Apropos;
