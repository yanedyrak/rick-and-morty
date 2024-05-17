import styles from "./App.module.scss";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import LinkContainer from "./entities/Episode/LinkContainer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import CharacterPage from "./pages/Character/CharacterPage";
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharacterPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
