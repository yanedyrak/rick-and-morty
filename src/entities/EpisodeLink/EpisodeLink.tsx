import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./EpisodeLink.module.scss";
export const EpisodeLink = ({ url }: { url: string }) => {
  const [data, setData] = useState({
    id: 0,
    name: "",
    air_date: "",
    episode: "",
  });
  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className={styles.link}
      key={data.id}
      to={`/episodes/${data.id}`}
    >
      <div className={styles.container}>
        <h1 className={styles.title}>{data.name}</h1>
        <p className={styles.description}>{data.air_date}</p>
        <p className={styles.description}>{data.episode}</p>
      </div>
    </Link>
  );
};
