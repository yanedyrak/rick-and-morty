import styles from "./App.module.scss";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import EpisodesPage from "./pages/EpisodesPage/EpisodesPage";
import LocationPage from "./pages/LocationPage/LocationPage";
import { EpisodePage } from "./pages/EpisodePage/EpisodePage";
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
