import { EpisodeType } from "../../shared/store/slices/pageSlice";
import styles from "./Episode.module.scss";

const Episode: React.FC<EpisodeType> = ({ name, air_date, episode }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{air_date}</p>
      <p className={styles.description}>{episode}</p>
    </div>
  );
};

export default Episode;
