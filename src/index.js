import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import { DbProvider } from "./components/db-context";
import neo4jService from "./services/neo4j";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DbProvider value={neo4jService}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </DbProvider>
);
