import Image from "next/image";
import Link from "next/link";
import styles from "./thirdblock.module.css";
import image3 from "@/public/components/home/image3.png";

export default function ThirdBlock() {
  return (
    <div className={styles.thirdBlock}>
      <div className={styles.content}>
        <div className={styles.title}>Our Story</div>
        <div className={styles.firstContent}>
          À Ơi - Awakening the soul of <br /> Vietnam, bridging timeless{" "}
          <span>
            {" "}
            cultural <br /> heritage{" "}
          </span>{" "}
          with <span>modern hearts.</span>
        </div>
        <Link href="/our-story">
          <div className={styles.firstRoute}>
            <svg
              width="61"
              height="38"
              viewBox="0 0 61 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M59.4532 20.4533C60.4295 19.477 60.4295 17.8941 59.4532 16.9178L43.5433 1.00788C42.567 0.0315666 40.9841 0.0315666 40.0078 1.00788C39.0314 1.98419 39.0314 3.5671 40.0078 4.54341L54.1499 18.6855L40.0078 32.8277C39.0314 33.804 39.0314 35.3869 40.0078 36.3632C40.9841 37.3395 42.567 37.3395 43.5433 36.3632L59.4532 20.4533ZM0.685425 21.1855H57.6854V16.1855H0.685425V21.1855Z"
                fill="#F3E0C7"
              />
            </svg>
          </div>
        </Link>
      </div>
      <div className={styles.leftImage}>
        <Image src={image3} alt="leftImage" />
      </div>
      <div className={styles.rightImage}>
        <Image src={image3} alt="rightImage" />
      </div>
    </div>
  );
}
