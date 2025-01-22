import Footer from "@/components/shared/footer";
import FirstBlock from "@/components/our-story/firstblock";
import SecondBlock from "@/components/our-story/secondblock";
import ThirdBlock from "@/components/our-story/thirdblock";
import styles from "./ourstory.module.css";
import Header from "@/components/shared/header";

export default function OurStory() {
  return (
    <>
      <Header />
      <div className={styles.ourStory}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
      <Footer />
    </>
  );
}
