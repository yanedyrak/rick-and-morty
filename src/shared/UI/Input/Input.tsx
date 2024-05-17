import { useDispatch } from "react-redux";
import styles from "./Input.module.scss";
import { setName } from "../../store/slices/pageSlice";
import { clear } from "../../store/slices/pageSlice";
import { useEffect, useState } from "react";
import { useDebounce } from "../../../features/useDebounce";
const Input = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    dispatch(clear());
    dispatch(setName(debouncedValue));
  }, [debouncedValue]);

  return (
    <input
      value={value}
      onChange={handleChange}
      className={styles.input}
      type="text"
    />
  );
};

export default Input;
