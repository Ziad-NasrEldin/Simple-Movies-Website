import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import styles from "./styles/App.module.css";

function App() {
  return (
    <div className={styles.appShell}>
      <Navbar />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
