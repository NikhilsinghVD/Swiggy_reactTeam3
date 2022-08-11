import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import "../node_modules/@fortawesome/.fontawesome-free-PK1EIR7C/css/all.css"
// import "../node_modules/@fontawesome/.fontawesome-free-PK1EIR7C/css/all.css";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import store from "./jayapal/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store }>
  <React.StrictMode>
   
    <BrowserRouter>

    <App />
    </BrowserRouter>
   
  </React.StrictMode>
  </Provider>
);




