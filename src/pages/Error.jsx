import Error404 from "../components/Error404";
import styles from "./Error.module.scss";

function Error() {
  return (
    <>
      <div
        className={`d-flex flex-column align-items-center ${styles.appContainer}`}
      >
        <Error404 />
      </div>
    </>
  );
}

export default Error;
