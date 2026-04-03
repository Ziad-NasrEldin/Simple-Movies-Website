import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { MoviesProvider } from "./context/moviesProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoviesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MoviesProvider>
  </StrictMode>,
);
