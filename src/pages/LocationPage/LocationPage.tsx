import styles from "./LocationPage.module.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { CharacterLink } from "../../entities/CharacterLink/CharacterLink";
import { useAppDispatch } from "../../shared/store/store";
import { setCategory } from "../../shared/store/slices/UI/categorySlice";
type LocationType = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
};
export const LocationPage = () => {
  const id = useParams().id;
  const [locations, setLocations] = useState<LocationType>({
    id: 0,
    name: "",
    type: "",
    dimension: "",
    residents: [],
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${id}`)
      .then((response) => setLocations(response.data));
    dispatch(setCategory(-1));
  }, []);
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      className={styles.link}
      key={locations.id}
      to={`/locations/${locations.id}`}
    >
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <h1 className={styles.title}>{locations.name}</h1>
          <p className={styles.description}>{locations.type}</p>
          <p className={styles.description}>{locations.dimension}</p>
        </div>

        <div className={styles.residents}>
          {locations.residents.map((el: string) => (
            <CharacterLink key={el} url={el} />
          ))}
        </div>
      </div>
    </Link>
  );
};
