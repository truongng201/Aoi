import styles from "./village.module.css";
import Footer from "@/components/footer";
import Link from 'next/link';

export default function OurVillage() {
  return (
    <>
      <div className={styles.intro}>
        <button className={styles.navigationButton}>
          <span>&#8594;</span>
        </button>
        <div className={styles.content}>
          <Link href="/">
            <img className={styles.logo} src="/logo.png" alt="Logo" />
          </Link>
          <h2 className={styles.subtitle}>OUR VILLAGE</h2>
          <p className={styles.tagline}>
            Every culture thrives forever <br />
            with the <span className={styles.highlight}>right villagers.</span>
          </p>
          <div className={styles.graphics}>
            <div className={styles.graphicLeft}></div>
            <div className={styles.graphicRight}></div>
          </div>
        </div>
      </div>
      <div className={styles.values}></div>
      <Footer />
    </>
  );
}