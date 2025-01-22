import styles from "@/components/projects/testimonial.module.css";
import Image from "next/image";
import Link from "next/link";

const Testimonial = () => {
  return (
    <>
      <div className={styles.testimonial}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            “We partnered with À Ơi to implement a marketing strategy for the
            iONAH Show in Hanoi, and I must say, the results exceeded all
            expectations!”
          </blockquote>
          <div className={styles.detailsBlock}>
            <div className={styles.nothing}></div>
            <div className={styles.details}>
              <p>
                “À Ơi’s strategy was highly effective in highlighting the fusion
                of circus, dance, comedy, and stage technology, seamlessly
                interwoven with cultural elements of the capital, creating a
                fresh and appealing image for the program. Ticket sales saw
                remarkable growth, and the show gained appreciation from diverse
                audience groups, ranging from families to foreign tourists,
                particularly during the peak travel season.”
              </p>
              <p>iONAH Show Client Team Member</p>
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
