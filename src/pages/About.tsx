import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <div className={styles["section-container"]}>
        <div className={styles["text-container"]}>
          <p>
            I’m dedicated to the pursuit of making my little place in the world
            more beautiful and joyful.
          </p>
          <p>
            I’m thrilled to share some of my story with you. If we ever have the
            chance to meet, feel free to ask me anything. I believe in the power
            of sharing experiences, hoping they may inspire or resonate with
            others.
          </p>
          <p>
            It has taken me most of my life to be able to call myself an artist.
            Although I know I’ve always been a creator and vivid thinker.
          </p>
          <p>
            As many of us have, I’ve taken many twists and turns to get where I
            am. I’m blessed to finally be able to direct my energy and attention
            into being an artist and creator.
          </p>
          <p>
            Adventure has always been a driving force in my life. I live life
            BIG, sometimes to my own detriment, until I learned to harness that
            energy for positive ends. I found recovery from addiction in 2007
            and that marked a significant turning point in my life, leading me
            on a profound physical, mental and spiritual journey.
          </p>
          <p>
            My travels around the world gave me insights that challenged the
            teachings and beliefs I was brought up with. I learned that I am not
            a passive recipient of life’s circumstances; rather, I possess the
            power to shape my own reality. I am the creator and therefore I have
            the power to create a life beyond my wildest dreams.
          </p>
          <p>
            In 2017, I was given a diagnosis for Multiple Sclerosis. Instead of
            accepting that as my truth I took my explorations even further. I
            took a deep dive into spirituality, holistic health and wellness,
            meditation and metaphysics.
          </p>
          <p>
            Guided by the universe, I found myself in the company of remarkable
            teachers to help me begin to understand the power within.
          </p>
          <p>
            Much of my adult life was spent in a high-stress corporate
            environment, a path driven by financial necessity and obligation.
            However, Covid-19 prompted a significant shift. In the chaos and
            uncertainty of those times, I turned to painting mandalas as a form
            of meditation and solace. It was an intuitive process, one that I
            believe was channeled from a universal source of energy.
          </p>
          <p>
            Leaving New York in my RV, I embarked on a journey along the East
            Coast looking for a place that felt like I belonged. I landed in
            Pawleys Island SC, a tranquil haven. I was able to create a
            sanctuary where I can create beautiful paintings and art UNTIL THE
            COWS COME HOME…
          </p>
        </div>
        <img src="about.jpg" className={styles.img} />
      </div>
    </div>
  );
}
