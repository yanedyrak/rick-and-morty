import { useSelector } from "react-redux";
import styles from "./CharacterListPage.module.scss";
import { RootState, useAppDispatch } from "../../shared/store/store";
import Character from "../../entities/Character/Character";
import React from "react";
import {
  clear,
  fetchItem,
  setLoading,
} from "../../shared/store/slices/pageSlice";
import Input from "../../shared/UI/Input/Input";
import { Link } from "react-router-dom";
const CharacterPage = () => {
  const dispatch = useAppDispatch();
  const characters = useSelector((state: RootState) => state.pageSlice);

  const scrollHandler = (e: any) => {
    if (
      e.target.documentElement.scrollHeight -
        (e.target.documentElement.scrollTop + window.innerHeight) <
      300
    ) {
      dispatch(setLoading(true));
    }
  };
  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
      dispatch(clear());
    };
  }, []);
  React.useEffect(() => {
    if (characters.loading) {
      dispatch(
        fetchItem({
          page: characters.page,
          name: characters.name,
          parameter: "character",
        })
      );
    }
  }, [characters.name, characters.loading]);
  return (
    <div className={styles.wrapper}>
      <Input />
      <div className={styles.container}>
        {characters.items.map((el: any) => (
          <Link key={el.id} to={`/character/${el.id}`}>
            <Character {...el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;
