import Content from "./components/Content";
import styles from "./App.module.scss";
import mg from "./images/img-hero-home.png";

function App() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <Content image={mg} texte={"Chez vous, partout et ailleurs"} />
      </div>
    </>
  );
}

export default App;
