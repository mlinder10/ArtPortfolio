import { Dispatch, SetStateAction } from "react";
import { VscClose } from "react-icons/vsc";
import styles from "../styles/modal.module.css";

type ImageModalProps = {
  item: string | null;
  setItem: Dispatch<SetStateAction<string | null>>;
};

export function ImageModal({ item, setItem }: ImageModalProps) {
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
