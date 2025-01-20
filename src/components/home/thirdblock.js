import Image from "next/image";
import styles from "./thirdblock.module.css";
import image3 from "@/public/components/home/image3.png";

export default function ThirdBlock() {
  return (
    <div className={styles.thirdBlock}>
      <div className={styles.title}>Our Story</div>
      <div className={styles.firstContent}>
        À Ơi - Awakening the soul of <br /> Vietnam, bridging timeless{" "}
        <span>
          cultural <br /> heritage
        </span>
        with <span>modern hearts.</span>
      </div>
      <div className={styles.leftImage}>
        <Image src={image3} alt="leftImage" />
      </div>
      <div className={styles.rightImage}>
        <Image src={image3} alt="rightImage" />
      </div>
      <div className={styles.firstRoute}>
        
      </div>
    </div>
  );
}
