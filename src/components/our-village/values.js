import styles from "./values.module.css";
import Image from "next/image";

const Values = () => {
  return (
    <div className={styles.values}>
      <div className={styles.header}>
        <h2 className={styles.subtitle}>Our Values</h2>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.valueCard}>
          <Image src="/village/value1.png" width={460} height={320} className={styles.icon} alt="Value 1" />
          <div className={styles.cardTextBox}>
            <h2 className={styles.cardTitle}>Celebrate Heritage</h2>
            <p className={styles.description}>
              We honor the timeless beauty of Vietnamese culture by bringing its
              stories to the world in innovative and meaningful ways.
            </p>
          </div>
        </div>
        <div className={styles.valueCard}>
          <Image src="/village/value2.png" width={460} height={320} className={styles.icon} alt="Value 2" />
          <div className={styles.cardTextBox}>
            <h2 className={styles.cardTitle}>Embrace the Challenge</h2>
            <p className={styles.description}>
              We thrive on challenges, transforming obstacles into opportunities
              to push boundaries and redefine possibilities.
            </p>
          </div>
        </div>
        <div className={styles.valueCard}>
          <Image src="/village/value3.png" width={460} height={320} className={styles.icon} alt="Value 3" />
          <div className={styles.cardTextBox}>
            <h2 className={styles.cardTitle}>Think Beyond Borders</h2>
            <p className={styles.description}>
              Push boundaries to connect Vietnam with the world, blending bold
              ideas with cultural depth to spark global curiosity.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.border}></div>
    </div>
  );
};

export default Values;
