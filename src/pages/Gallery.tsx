import { Dispatch, SetStateAction, useState } from "react";
import styles from "../styles/gallery.module.css";
import { VscClose } from "react-icons/vsc";

const images = [
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
  "https://placehold.co/300x200",
];

export default function Gallery() {
  const [item, setItem] = useState<string | null>(null);

  return (
    <>
      <div className={styles.container}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            onClick={() => setItem(image)}
            className={styles.image}
          />
        ))}
      </div>
      <GalleryItem item={item} setItem={setItem} />
    </>
  );
}

type GalleryItemProps = {
  item: string | null;
  setItem: Dispatch<SetStateAction<string | null>>;
};

function GalleryItem({ item, setItem }: GalleryItemProps) {
  if (item === null) return null;

  return (
    <div className={styles.modal}>
      <div className={styles["image-container"]}>
        <img src={item} alt="" />
        <button onClick={() => setItem(null)}>
          <VscClose />
        </button>
      </div>
    </div>
  );
}
