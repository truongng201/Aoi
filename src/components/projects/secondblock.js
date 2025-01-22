import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@public/projects/image1.png";
import Link from "next/link";

export default function SecondBlock() {
  return (
    <div className={styles.secondblock}>
      <div className={styles.firstImage}>
        <Image alt="image1" src={image1} />
      </div>
      <div className={styles.content}>
        <div className={styles.blockContent}>
          <div className={styles.title}>
            <p>IONAH SHOW</p>
          </div>
          <div className={styles.description}>
            Step into Hanoi’s Magical World
          </div>
          <div className={styles.year}>Year: 2024</div>
          <Link href="/projects/ionah-show">
              <svg
                width="61"
                height="38"
                viewBox="0 0 61 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M59.4533 20.4533C60.4296 19.477 60.4296 17.8941 59.4533 16.9178L43.5434 1.00788C42.5671 0.0315666 40.9842 0.0315666 40.0079 1.00788C39.0316 1.98419 39.0316 3.5671 40.0079 4.54341L54.15 18.6855L40.0079 32.8277C39.0316 33.804 39.0316 35.3869 40.0079 36.3632C40.9842 37.3395 42.5671 37.3395 43.5434 36.3632L59.4533 20.4533ZM0.685547 21.1855H57.6855V16.1855H0.685547V21.1855Z"
                  fill="#F3E0C7"
                />
              </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
