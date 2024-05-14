import styles from "./App.module.scss";
import Header from "./widgets/Header/Header";
import Footer from "./widgets/Footer/Footer";
function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div></div>
      <Footer />
    </div>
  );
}

export default App;
