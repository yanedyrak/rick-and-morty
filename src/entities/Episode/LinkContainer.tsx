import styles from "./LinkContainer.module.scss";

interface LinkContainerProps {
  title: string;
  about: string;
  description: string;
}
const LinkContainer: React.FC<LinkContainerProps> = ({
  title,
  about,
  description,
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{about}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default LinkContainer;
