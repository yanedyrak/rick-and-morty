import { useSelector } from "react-redux";
import styles from "./LocationPage.module.scss";
import { RootState, useAppDispatch } from "../../shared/store/store";
import React from "react";
import {
  addPage,
  clear,
  fetchItem,
  setLoading,
} from "../../shared/store/slices/pageSlice";
import Input from "../../shared/UI/Input/Input";
import Location from "../../entities/Location/Location";
const LocationPage = () => {
  const dispatch = useAppDispatch();
  const locations = useSelector((state: RootState) => state.pageSlice);

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
    if (locations.loading) {
      dispatch(
        fetchItem({
          page: locations.page,
          name: locations.name,
          parameter: "location",
        })
      );
      dispatch(addPage());
    }
  }, [locations.name, locations.loading]);
  return (
    <div className={styles.wrapper}>
      <Input />
      <div className={styles.container}>
        {locations.items.map((el: any) => (
          <Location key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
