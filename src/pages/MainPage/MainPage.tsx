import styles from "./MainPage.module.scss";
import Logo from "../../shared/assets/logo/Logo";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../shared/store/slices/UI/categorySlice";
const MainPage = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Logo />
      </div>
      <h1 className={styles.title}>Knowledge Rick and Morty</h1>
      <p className={styles.description}>
        Something information about Rick and Morty
      </p>
      <div className={styles.cards}>
        <Link
          onClick={() => dispatch(setCategory(0))}
          className={styles.link}
          to="/characters"
        >
          <h1 className={styles.cardTitle}>Characters</h1>
          <p className={styles.cardDescription}>
            Find information about character that you like
          </p>
        </Link>

        <Link
          onClick={() => dispatch(setCategory(1))}
          className={styles.link}
          to="/episodes"
        >
          <h1 className={styles.cardTitle}>Episodes</h1>
          <p className={styles.cardDescription}>
            Find information about some episode
          </p>
        </Link>

        <Link
          onClick={() => dispatch(setCategory(2))}
          className={styles.link}
          to="/locations"
        >
          <h1 className={styles.cardTitle}>Locations</h1>
          <p className={styles.cardDescription}>
            Find the location of Rick and Morty
          </p>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
