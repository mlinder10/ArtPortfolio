import { GalleryItemType } from "../types";
import { Dispatch, SetStateAction } from "react";
import styles from "../styles/gallery.module.css";

type GalleryItemProps = {
  item: GalleryItemType;
  setItem: Dispatch<SetStateAction<string | null>>;
};

export default function GalleryItem({ item, setItem }: GalleryItemProps) {
  return (
    <div onClick={() => setItem(item.url)} className={styles["item-container"]}>
      <img src={item.url} alt="" className={styles.img} />
      <div className={styles["text-container"]}>
        <p>
          <b>{item.title}</b>
        </p>
        <p className={styles.healing}>Healing Power: {item.healingPower}</p>
        <p className={styles.description}>{item.description}</p>
        <p
          className={styles.description}
          style={{ color: item.descriptionTwoColor }}
        >
          <span style={{ textDecoration: "underline" }}>
            <b>Just one conscious breath</b>
          </span>
          {item.descriptionTwo}
        </p>
        <p className={styles.description}>{item.descriptionThree}</p>
      </div>
    </div>
  );
}
