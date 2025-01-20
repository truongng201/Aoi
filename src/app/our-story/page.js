import Footer from "@/components/footer";
import FirstBlock from "@/components/our-story/firstblock";
import SecondBlock from "@/components/our-story/secondblock";
import ThirdBlock from "@/components/our-story/thirdblock";
import styles from "./ourstory.module.css"

export default function OurStory() {
  return (
    <>
      <div className={styles.ourStory}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
      <Footer />
    </>
  );
}
