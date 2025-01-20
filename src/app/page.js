import styles from "./page.module.css";
import Footer from "@/components/footer";
import FirstBlock from "@/components/home/firstblock";
import SecondBlock from "@/components/home/secondblock";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <FirstBlock />
        <SecondBlock/>  
        <div className={styles.thirdBlock}>Hey</div>
        <div className={styles.forthBlock}>Yo</div>
      </div>
      <Footer />
    </>
  );
}
