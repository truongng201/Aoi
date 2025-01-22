import styles from "./page.module.css";
import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";
import FirstBlock from "@/components/home/firstblock";
import ForthBlock from "@/components/home/forthblock";
import SecondBlock from "@/components/home/secondblock";
import ThirdBlock from "@/components/home/thirdblock";

export default function Home() {
  return (
    <>
      <Header/>
      <div className={styles.page}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <ForthBlock/>
      </div>
      <Footer />
    </>
  );
}
