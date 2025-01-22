import styles from "@/components/projects/testimonial.module.css";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            “À Ơi has been an incredible partner in helping Central Circus in
            Hanoi reach new heights.”
          </blockquote>
          <div className={styles.detailsBlock}>
            <div className={styles.nothing}></div>
            <div className={styles.details}>
              <p>
                “They brought fresh energy and creativity to our marketing
                efforts, developing a campaign that truly captured the heart and
                soul of our performances. With their support, we were able to
                highlight the unique artistry and cultural richness of Central
                Circus, reaching audiences we had never connected with before.
                Their strategic use of social media and visually compelling
                content helped us draw in families, young audiences, and
                international visitors alike.”
              </p>
              <p>Central Circus Client Team Member</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
      <div className={styles.stats}>
        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <p className={styles.statValue}>40%</p>
            <p className={styles.statDescription}>
              growth in social media engagement
            </p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>35%</p>
            <p className={styles.statDescription}>increase in ticket sales</p>
          </div>
          <div className={styles.statItem}>
            <p className={styles.statValue}>30%</p>
            <p className={styles.statDescription}>
              growth in brand recognition among young people
            </p>
          </div>
        </div>
        <div className={styles.ctaButton}>
          <button>WORK WITH US</button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
