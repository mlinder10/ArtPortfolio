import styles from "../styles/what.module.css";

export default function What() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What is Sacred Geometry</h1>
      <img src="/what_is_it.png" alt="" className={styles.img} />

      <div className={styles["text-container"]}>
        <p>
          Sacred geometry explores the hidden language of shapes and patterns
          that permeate the natural world, including the very fabric of matter
          itself. From the smallest particles to the grandest galaxies, these
          geometric forms appear everywhere, revealing the interconnectedness of
          all things.
        </p>
        <p>
          Mandalas are a prime example of sacred geometry art. These circular
          designs feature elaborate geometric patterns radiating outward from a
          central point, symbolizing the universe and the interconnectedness of
          all things. Mandalas are often used as tools for meditation and
          spiritual contemplation, inviting viewers to explore the depths of
          their own consciousness.
        </p>
        <p>
          Overall, sacred geometry art serves as a bridge between the material
          and the spiritual worlds, inviting viewers to contemplate the
          mysteries of existence and their place within the cosmic order.
          Through its use of geometric shapes, patterns, and symbolism, sacred
          geometry art seeks to awaken a sense of wonder and awe, reminding us
          of the profound beauty and oneness of all creation.
        </p>
      </div>
    </div>
  );
}
