import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DetailContextProvider from "./context/DetailContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DetailContextProvider>
      <App />
    </DetailContextProvider>
  </React.StrictMode>
);
