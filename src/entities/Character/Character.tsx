import styles from "./Character.module.scss";
import { CharacterType } from "../../shared/store/slices/pageSlice";
const Character: React.FC<CharacterType> = ({ image, name, gender }) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} alt="character" />
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{gender}</p>
    </div>
  );
};

export default Character;
