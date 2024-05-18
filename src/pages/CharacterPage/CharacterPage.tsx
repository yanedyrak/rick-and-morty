import styles from "./CharacterPage.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../shared/store/store";
import { setCategory } from "../../shared/store/slices/UI/categorySlice";

export const CharacterPage = () => {
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const [data, setData] = useState({
    name: "",
    image: "",
    gender: "",
    status: "",
    species: "",
  });
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`).then((res) => {
      setData(res.data);
    });
    dispatch(setCategory(-1));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <img className={styles.image} src={data.image} alt="character" />
        <p className={styles.title}>{data.name}</p>
      </div>

      <div className={styles.info}>
        <p className={styles.description}>Gender: {data.gender}</p>
        <p className={styles.description}>Status: {data.status}</p>
        <p className={styles.description}>Specie: {data.species}</p>
      </div>
    </div>
  );
};
