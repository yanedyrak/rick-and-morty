import { LocationType } from "../../shared/store/slices/pageSlice";
import styles from "./Location.module.scss";

const Location: React.FC<LocationType> = ({ name, type, dimension }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{type}</p>
      <p className={styles.description}>{dimension}</p>
    </div>
  );
};

export default Location;
