import FirstBlock from "@/components/projects/firstblock";
import SecondBlock from "@/components/projects/secondblock";
import ThirdBlock from "@/components/projects/thirdblock";
import Footer from "@/components/shared/footer";
import styles from "./projects.module.css";

export default function Projects() {
  return (
    <>
      <div className={styles.projects}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
      <Footer />
    </>
  );
}
