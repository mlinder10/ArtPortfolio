import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src="/logo_dotted.gif" alt="" className={styles.img} />
        <p className={styles.welcome}>Welcome to the Creative Universe of</p>
        <p className={styles.name}>Lynne</p>
        <p className={styles.title}>Sacred Geometry Designs</p>
        <p className={styles.description}>Medium: Love & Intention</p>
      </div>
    </div>
  );
}
