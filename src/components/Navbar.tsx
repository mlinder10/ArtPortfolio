import { Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link to="/">
            <img src="/logo.png" alt="" className={styles.logo} />
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className={path === "/gallery" ? styles.active : ""}
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/about" className={path === "/about" ? styles.active : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/process"
            className={path === "/process" ? styles.active : ""}
          >
            The Process
          </Link>
        </li>
        <li>
          <Link to="/what" className={path === "/what" ? styles.active : ""}>
            What is Sacred Geometry
          </Link>
        </li>
        <li>
          <Link to="/store" className={path === "/" ? styles.active : ""}>
            Store PSYC-K(C)
          </Link>
        </li>
      </ul>
    </nav>
  );
}
