import styles from "./firstblock.module.css";
import image1 from "@public/reach-for-us/image1.png";
import Image from "next/image";
export default function FirstBlock() {
  return (
    <div className={styles.firstblock}>
      <div className={styles.firstImage}>
        <Image alt="first image" src={image1} />
      </div>
      <div className={styles.title}>Let's Connect</div>
      <div className={styles.description}>
        We are excited to collaborate with you to create lasting <br /> social
        impact and preserve timeless values.
      </div>
    </div>
  );
}
