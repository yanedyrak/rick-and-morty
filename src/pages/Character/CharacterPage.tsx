import { useSelector } from "react-redux";
import styles from "./CharacterPage.module.scss";
import { RootState, useAppDispatch } from "../../shared/store/store";
import Character from "../../entities/Character/Character";
import React from "react";
import {
  addPage,
  clear,
  fetchItem,
  setLoading,
} from "../../shared/store/slices/pageSlice";
import Input from "../../shared/UI/Input/Input";
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
      dispatch(addPage());
    }
    dispatch(setLoading(false));
  }, [characters.name, characters.loading]);
  return (
    <div className={styles.wrapper}>
      <Input />
      <div className={styles.container}>
        {characters.items.map((el: any) => (
          <Character key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;
