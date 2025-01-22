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
            IONAH Show Hanoi, a fusion of traditional fairy tales and modern
            stage arts, sought to captivate audiences and become a cultural
            landmark in Hanoi. Blending circus, hip-hop, belly dancing, and
            advanced visuals, the show offered a unique 90-minute journey
            through a magical world. The IONAH team partnered with À Ơi to
            create a campaign that highlighted its vibrant mix of modernity and
            Vietnamese heritage, resonating with both young audiences and
            tourists.
          </p>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/projects/ionah-show/ionah1.png"
            alt="Ionah Show 1"
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
              À Ơi designed the "Step into Hanoi’s Magical World" campaign,
              showcasing IONAH’s unique fusion of modern stage arts and
              Vietnamese cultural heritage. To boost engagement, we developed
              bilingual ads, interactive social media content, and a
              behind-the-scenes documentary
            </p>
            <p>
              Collaborations with local influencers and targeted digital ads
              positioned IONAH as an essential cultural experience for locals
              and tourists alike, successfully blending tradition with
              innovation.
            </p>
          </div>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah2.jpg"
              alt="Ionah Show 2"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah3.jpg"
              alt="Ionah Show 3"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah4.jpg"
              alt="Ionah Show 4"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah5.png"
              alt="Ionah Show 5"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah6.jpg"
              alt="Ionah Show 6"
              width={420}
              height={600}
              className={styles.strategyImg}
            ></Image>
          </div>
          <div className={styles.imageCard}>
            <Image
              src="/projects/ionah-show/ionah7.jpg"
              alt="Ionah Show 7"
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
            cultural value. Offline workshops engaged over 1,000 students,
            deepening their connection to Central Circus.
          </p>
        </div>
      </div>
      <div className={styles.lastImgContainer}>
        <Image
          src="/projects/ionah-show/ionah8.png"
          alt="Ionah Show 8"
          width={1512}
          height={713}
          className={styles.lastImg}
        ></Image>
      </div>
    </div>
  );
};

export default ProjectDesc;
