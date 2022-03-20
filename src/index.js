import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter, BrowserRouter as Router}  from "react-router-dom";
import { FilterProvider } from "./context/FilterContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FilterProvider>
        <App />
      </FilterProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
