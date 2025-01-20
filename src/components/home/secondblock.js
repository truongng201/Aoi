import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@/public/components/home/image1.png";

export default function SecondBlock() {
  return (
    <div className={styles.secondBlock}>
      <div className={styles.firstContent}>
        We craft <span>stories and campaigns</span> celebrating the beauty of
        Vietnam's cultural heritage for brands, organizations, and creative
        projects.
      </div>
      <div className={styles.image}>
        <Image src={image1} alt="image1" />
      </div>
      <div className={styles.secondContent}>
        Vietnamese culture is a treasure of beauty and history, connecting
        people through shared heritage and inspiring pride. Celebrating these
        traditions preserves their essence and enriches the world with timeless
        values.
      </div>
    </div>
  );
}
