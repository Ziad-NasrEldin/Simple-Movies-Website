import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <h1 className={styles.brand}>MovieHub</h1>
      <nav>
        <ul className={styles.navLinks}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.activeLink}` : styles.link
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
