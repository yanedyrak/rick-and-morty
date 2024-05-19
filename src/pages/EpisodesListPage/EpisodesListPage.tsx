import { useSelector } from "react-redux";
import styles from "./EpisodesListPage.module.scss";
import { RootState, useAppDispatch } from "../../shared/store/store";

import React from "react";
import {
  clear,
  fetchItem,
  setLoading,
} from "../../shared/store/slices/pageSlice";
import Input from "../../shared/UI/Input/Input";

import Episode from "../../entities/Episode/Episode";
import { Link } from "react-router-dom";

const EpisodesListPage = () => {
  const dispatch = useAppDispatch();
  const episodes = useSelector((state: RootState) => state.pageSlice);

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
    if (episodes.loading) {
      dispatch(
        fetchItem({
          page: episodes.page,
          name: episodes.name,
          parameter: "episode",
        })
      );
    }
  }, [episodes.name, episodes.loading]);
  return (
    <div className={styles.wrapper}>
      <Input />
      <div className={styles.container}>
        {episodes.items.map((el: any) => (
          <Link
            onClick={() => window.scrollTo(0, 0)}
            to={`/episodes/${el.id}`}
            key={el.id}
          >
            <Episode {...el} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EpisodesListPage;
