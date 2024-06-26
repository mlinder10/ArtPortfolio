import styles from "../styles/process.module.css";

export default function Process() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The Process</h1>
      <div className={styles["section-container"]}>
        <div className={styles["text-container"]}>
          <p>
            Welcome to "The Process" section of my website, where I unveil the
            intricate steps behind the creation of my artwork.
          </p>
          <p>
            To commence, each piece begins with the careful preparation of the
            wood. I meticulously sand and finish pre-cut pine, ensuring a smooth
            and pristine canvas for my creation.
          </p>
          <p>
            Following this, I embark on the framework, measuring and outlining
            the design's structure. However, the beauty lies in the spontaneity;
            at this stage, the final outcome remains a mystery, as I let
            intuition guide the process.
          </p>
        </div>
        <div className={styles["img-container"]}>
          <img src="/process_one.jpg" alt="" />
        </div>
        <div className={styles["img-container"]}>
          <img src="/process_two.jpg" alt="" />
        </div>
        <div className={styles["text-container"]}>
          <p>
            Once the groundwork is laid, I delve into the realm of color,
            allowing the process to organically unfold. Using a blend of acrylic
            and pouring medium, I mix the paint to achieve the perfect texture
            for the subsequent dotting technique. This method serves as a
            soothing ritual, where my mind effortlessly calculates and counts,
            fostering a sense of tranquility.
          </p>
          <p>
            Immersed in the creative zone, I infuse each piece with intention,
            breathing love, peace, and whatever emotions arise within me into
            the design.
          </p>
        </div>
        <div className={styles["text-container"]}>
          <p>
            The journey continues with the application of epoxy, conducted at my
            dedicated station. Here, I pour, flame polish, and meticulously wipe
            the surface, dedicating hours to ensure a flawless finish.
          </p>
          <p>
            Following a meticulous 24-hour drying period, I proceed to refine
            the piece, sanding the finish with 400 grit sandpaper. This process
            is repeated, layering upon layer, until the desired depth and sheen
            are achieved.
          </p>
          <p>
            Finally, after the careful culmination of each step, the artwork is
            ready to grace your space as a tabletop or wall hanging, inviting
            you to immerse yourself in its beauty and craftsmanship.
          </p>
        </div>
        <div className={styles["img-container"]}>
          <img src="/process_three.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
