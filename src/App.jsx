import Content from "./components/Content";
import styles from "./App.module.scss";

function App() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <Content
          image={"./src/images/img-hero-home.png"}
          texte={"Chez vous, partout et ailleurs"}
        />
      </div>
    </>
  );
}

export default App;
