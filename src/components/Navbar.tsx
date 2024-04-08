import { Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css";
import { FaArtstation, FaImage, FaQuestion, FaStore } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <MobileView />
      <DesktopView />
    </>
  );

  function DesktopView() {
    return (
      <nav className={styles.nav + " " + styles.desktop}>
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
            <Link
              to="/about"
              className={path === "/about" ? styles.active : ""}
            >
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
            <Link
              to="/store"
              className={path === "/store" ? styles.active : ""}
            >
              Store PSYC-K(C)
            </Link>
          </li>
        </ul>
      </nav>
    );
  }

  function MobileView() {
    return (
      <nav className={styles.nav + " " + styles.mobile}>
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
              <FaImage />
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={path === "/about" ? styles.active : ""}
            >
              <FaPerson />
            </Link>
          </li>
          <li>
            <Link
              to="/process"
              className={path === "/process" ? styles.active : ""}
            >
              <FaArtstation />
            </Link>
          </li>
          <li>
            <Link to="/what" className={path === "/what" ? styles.active : ""}>
              <FaQuestion />
            </Link>
          </li>
          <li>
            <Link
              to="/store"
              className={path === "/store" ? styles.active : ""}
            >
              <FaStore />
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}
