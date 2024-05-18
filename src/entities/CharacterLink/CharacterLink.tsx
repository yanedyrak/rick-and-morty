import axios from "axios";
import styles from "./CharacterLink.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const CharacterLink = (props: { url: string }) => {
  const [data, setData] = useState({
    name: "",
    image: "",
    id: 0,
  });
  useEffect(() => {
    axios.get(props.url).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <Link to={`/character/${data.id}`}>
      <div className={styles.container}>
        <img className={styles.image} src={data.image} alt="character" />{" "}
        <h1 className={styles.title}>{data.name}</h1>
      </div>
    </Link>
  );
};
