import styles from "./Footer.module.scss";
import { Telegram } from "../../shared/assets/footer/Telegram";
import { Vk } from "../../shared/assets/footer/Vk";
import { Github } from "../../shared/assets/footer/Github";
const Footer = () => {
  return (
    <div className={styles.container}>
      <a target="_blank" href="https://github.com/yanedyrak">
        <Github />
      </a>
      <a target="_blank" href="https://vk.com/itoshiJohan">
        <Vk />
      </a>
      <a target="_blank" href="https://telegram.me/itoshiJohan">
        <Telegram />
      </a>
    </div>
  );
};

export default Footer;
