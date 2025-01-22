import styles from "@/components/projects/projectDesc.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectDesc = () => {
  return (
    <div className={styles.projectDesc}>
      <div className={styles.goal}>
        <div className={styles.textContainer}>
          <h2>Goal</h2>
          <p className={styles.description}>
            Transforming circus arts from mere entertainment into a profound
            artistic experience, helping young audiences recognize the deep
            cultural value and national pride embedded in every performance.
            With the program at the Central Circus, our aim is to connect
            Vietnamese circus with national identity and breathe new life into
            the spirit of pride through the lens of the younger generation.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/projects/central-circus/cenCir1.png"
            alt="Central Circuit 1"
            width={900}
            height={460}
            className={styles.goalImg}
          ></Image>
        </div>
      </div>
      <div className={styles.strategy}>
        <div className={styles.textContainer}>
          <h2>Strategy</h2>
          <div className={styles.description}>
            <p>
              We aim to make circus arts more relatable to young audiences by
              blending cultural storytelling with modern trends. This includes
              creating engaging content on TikTok, Instagram, and YouTube,
              featuring behind-the-scenes stories and challenges like “Circus Your
              Life.”
            </p>
            <p>
              We also organize interactive workshops and performances that combine
              modern music, lighting, and open-stage designs to make the
              experience more appealing.
            </p>
          </div>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageCard}>
            <Image
              src="/projects/central-circus/cenCir2.png"
              alt="Central Circuit 2"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/central-circus/cenCir3.png"
              alt="Central Circuit 3"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/central-circus/cenCir4.png"
              alt="Central Circuit 4"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.result}>
        <div className={styles.textContainer}>
          <h2>Result</h2>
          <p className={styles.description}>
            Our efforts boosted young audience attendance by 55%, with 70%
            recognizing circus arts as a cultural expression. Online campaigns
            reached 2 million people, sparking discussions on Central Circus’
            cultural value. Offline workshops engaged over 1,000 students, deepening their connection to Central Circus.
          </p>
        </div>
      </div>
      <div className={styles.lastImgContainer}>
        <Image
          src="/projects/central-circus/cenCir5.png"
          alt="Central Circuit 5"
          width={1512}
          height={713}
          className={styles.lastImg}
        ></Image>
      </div>
    </div>
  );
};

export default ProjectDesc;
