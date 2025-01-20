import styles from "./page.module.css";
import Footer from "@/components/footer";
import FirstBlock from "@/components/home/firstblock";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <FirstBlock />
        <div className={styles.secondBlock}>Hello</div>
        <div className={styles.thirdBlock}>Hey</div>
        <div className={styles.forthBlock}>Yo</div>
      </div>
      <Footer />
    </>
  );
}
