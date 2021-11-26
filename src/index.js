import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./assets/i18n/i18n";
import Loader from "./components/Loader";
import { ThemeProvider } from "@mui/styles";
import theme from "./utils/Theme";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <App />
            <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable={false}
              pauseOnHover
              theme="colored"
            />
          </Router>
        </Provider>
      </ThemeProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
