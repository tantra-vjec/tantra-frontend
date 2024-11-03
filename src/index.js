import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader/Loader";

const root = ReactDOM.createRoot(document.getElementById("root"));

const RootComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
  };

  return isLoading ? <Loader onLoadComplete={handleLoadComplete} /> : <App />;
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
