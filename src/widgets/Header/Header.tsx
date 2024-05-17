import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../shared/assets/header/logo.png";
import { setCategory } from "../../shared/store/slices/UI/categorySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store/store";
import Burger from "../../shared/assets/header/Burger";
import { setModal } from "../../shared/store/slices/UI/modalSlice";
import Modal from "../../shared/UI/Modal";

const links = [
  {
    title: "Characters",
    link: "/characters",
  },
  {
    title: "Episodes",
    link: "/episodes",
  },
  {
    title: "Locations",
    link: "/locations",
  },
];
const Header = () => {
  const category = useSelector((state: RootState) => state.categorySlice.value);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <Link onClick={() => dispatch(setCategory(-1))} to="/">
        <img src={logo} className={styles.logo} />
      </Link>

      <div className={styles.links}>
        {links.map((link, index) => (
          <Link
            onClick={() => dispatch(setCategory(index))}
            className={`${styles.link} ${category === index && styles.active}`}
            to={link.link}
            key={link.title}
          >
            {link.title}
          </Link>
        ))}
        <div onClick={() => dispatch(setModal(true))} className={styles.burger}>
          <Burger />
        </div>
      </div>
      <Modal categoryArr={links} />
    </div>
  );
};

export default Header;
