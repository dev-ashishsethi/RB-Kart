import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter, BrowserRouter as Router}  from "react-router-dom";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/Authentication";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
      <ProductProvider>
        <App/>
      </ProductProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
