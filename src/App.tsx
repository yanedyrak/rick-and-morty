import styles from "./App.module.scss";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import { CharacterPage } from "./pages/CharacterPage/CharacterPage";
import EpisodesPage from "./pages/EpisodesListPage/EpisodesListPage";
import { LocationPage } from "./pages/LocationPage/LocationPage";
import { EpisodePage } from "./pages/EpisodePage/EpisodePage";
import LocationListPage from "./pages/LocationListPage/LocationListPage";
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<CharacterListPage />} />
        <Route path="/characters/:id" element={<CharacterPage />} />
        <Route path="/episodes" element={<EpisodesPage />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        <Route path="/locations" element={<LocationListPage />} />
        <Route path="/locations/:id" element={<LocationPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
