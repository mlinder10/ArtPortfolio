import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/what_is_it.jpg" alt="" className={styles.img} />
      <p className={styles.title}>Welcome to the Creative Universe of Lynne</p>
      <p className={styles["title-two"]}>Sacred Geometry Designs</p>
      <p className={styles["title-three"]}>Medium: Love & Intention</p>
      <div className={styles.contact}>
        <p>Contact me at {"untilthecows@gmail.com"}</p>
        <a
          href="https://www.facebook.com/share/WUokKi7ysdVmrP8c/?mibextid=LQQJ4d"
          target="_blank"
        >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/untilthecows" target="_blank">
          <FaInstagram />
        </a>
      </div>
      <div className={styles["link-container"]}>
        <Link to="/gallery" className={styles.link}>
          View Work
        </Link>
        <Link to="/about" className={styles.link}>
          About Me
        </Link>
      </div>
    </div>
  );
}
