import { useState } from "react";
import styles from "../styles/gallery.module.css";
import { ImageModal } from "../components/ImageModal";
import { items } from "../types";
import GalleryItem from "../components/GalleryItem";

export default function Gallery() {
  const [item, setItem] = useState<string | null>(null);

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Gallery</h1>
        <div className={styles["gallery-container"]}>
          {items.map((i) => (
            <GalleryItem key={i.title} item={i} setItem={setItem} />
          ))}
        </div>
      </div>
      <ImageModal item={item} setItem={setItem} />
    </>
  );
}
