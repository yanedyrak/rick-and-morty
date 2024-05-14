import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../shared/assets/header/logo.png";
const Header = () => {
  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} />{" "}
      <div className={styles.links}>
        <Link className={`${styles.link} ${styles.active}`} to="/characters">
          Characters
        </Link>
        <Link className={styles.link} to="/episodes">
          Episodes
        </Link>
        <Link className={styles.link} to="/locations">
          Locations
        </Link>
      </div>
    </div>
  );
};

export default Header;
