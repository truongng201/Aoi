import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@public/our-story/image1.png";

export default function SecondBlock() {
  return (
    <div className={styles.secondblock}>
      <div className={styles.content}>
        <div className={styles.title}>THE STORY OF À ƠI</div>
        <div className={styles.description1}>
          At À Ơi, we believe in the enduring <br /> power of culture to
          inspire, connect, <br /> and define who we are.
        </div>
        <div className={styles.description2}>
          Our story began with a deep love for Vietnamese <br /> heritage,
          nurtured by the melodies of our mother’s <br /> lullabies, the wisdom
          of our father’s teachings, and <br /> the folk songs that echoed
          through our village.
        </div>
        <div className={styles.description3}>
          These timeless traditions naturally became an <br /> inseparable part
          of our lives, shaping not only our <br /> <strong>identities</strong>{" "}
          but also a <strong>profound commitment</strong> <br />
          to preserving and sharing Vietnam’s rich cultural tapestry.
        </div>
      </div>
      <div className={styles.leftImage}>
        <Image src={image1} alt="leftImage" />
      </div>
      <div className={styles.rightImage}>
        <Image src={image1} alt="rightImage" />
      </div>
    </div>
  );
}
