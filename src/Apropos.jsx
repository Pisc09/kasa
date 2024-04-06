import Content from "./components/Content";
import styles from "./Apropos.module.scss";

function Apropos() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <Content image={"./src/images/img-hero-a-propos.png"} />
      </div>
    </>
  );
}

export default Apropos;
