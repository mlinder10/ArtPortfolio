import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <p className={styles.welcome}>Welcome to the Creative Universe of</p>
      <p className={styles.name}>Lynne</p>
      <img src="/favicon.png" alt="" />
      <p className={styles.title}>Sacred Geometry Designs</p>
      <p className={styles.description}>Medium: Love & Intention</p>
    </div>
  );
}
