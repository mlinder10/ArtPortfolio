import { Link } from "react-router-dom";
import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="/what_is_it.jpg" alt="" className={styles.img} />
      <p className={styles.title}>Welcome to the Creative Universe of Lynne</p>
      <p className={styles["title-two"]}>Sacred Geometry Designs</p>
      <p className={styles["title-three"]}>Medium: Love & Intention</p>
      <p>Contact me at {"untilthecows@gmail.com"}</p>
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
