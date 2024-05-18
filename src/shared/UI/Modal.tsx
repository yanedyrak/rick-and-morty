import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/slices/UI/modalSlice";
import styles from "./Modal.module.scss";
import { setCategory } from "../store/slices/UI/categorySlice";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

interface category {
  title: string;
  link: string;
}
interface ModalProps {
  categoryArr: category[];
}
const Modal: React.FC<ModalProps> = ({ categoryArr }) => {
  const modal = useSelector((state: RootState) => state.modalSlice.value);
  const dispatch = useDispatch();
  return (
    <div
      className={
        modal ? `${styles.container} ${styles.active}` : `${styles.container}`
      }
    >
      <div className={styles.closeButton}>
        <button
          onClick={() => dispatch(setModal(false))}
          className={styles.burgerButton}
        >
          x
        </button>
      </div>
      <div className={styles.burgerLinks}>
        {categoryArr.map((el, index) => (
          <Link
            to={el.link}
            key={index}
            onClick={() => {
              dispatch(setModal(false));
              dispatch(setCategory(index));
            }}
            className={styles.link}
          >
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Modal;
