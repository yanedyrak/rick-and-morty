import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./shared/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
