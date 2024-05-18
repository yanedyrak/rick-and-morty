import styles from "./EpisodePage.module.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../shared/store/store";
import { setCategory } from "../../shared/store/slices/UI/categorySlice";
import { CharacterLink } from "../../entities/CharacterLink/CharacterLink";
type EpisodeTypeData = {
  name: string;
  episode: string;
  air_date: string;
  id: number;
  characters: string[];
};
export const EpisodePage = () => {
  const dispatch = useAppDispatch();
  const id = useParams().id;
  const [data, setData] = useState<EpisodeTypeData>({
    name: "",
    episode: "",
    air_date: "",
    id: 0,
    characters: [],
  });
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/${id}`).then((res) => {
      setData(res.data);
    });
    dispatch(setCategory(-1));
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <div className={styles.title}>
          <p className={styles.title}>{data.name}</p>
          <p className={styles.description}>({data.episode})</p>
        </div>

        <p className={styles.description}>{data.air_date}</p>
      </div>

      <div className={styles.info}>
        <p className={styles.description}>Characters</p>
        <div className={styles.characters}>
          {data.characters.map((item: string) => (
            <CharacterLink key={item} url={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
