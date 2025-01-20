import styles from "./forthblock.module.css";

export default function ForthBlock() {
  return (
    <div className={styles.forthBlock}>
      <div className={styles.firstContent}>
        With a passion to elevate the beauty of our <br /> traditions, we are
        committed to collaborating
        <br /> with local communities to create sustainable and
        <br />
        impactful communication strategies. Together,
        <br /> let’s shape a future where every cultural value is
        <br /> preserved and celebrated.
      </div>
      <div className={styles.secondContent}>
        Join À Ơi in <br /> bringing <br />
        Vietnamese <br />
        culture to <br />
        life!
      </div>
      <div className={styles.contactUs}>
        CONTACT US
      </div>
    </div>
  );
}
