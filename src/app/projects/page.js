import FirstBlock from "@/components/projects/firstblock";
import SecondBlock from "@/components/projects/secondblock";
import ThirdBlock from "@/components/projects/thirdblock";
import Footer from "@/components/shared/footer";
import styles from "./projects.module.css";
import Header from "@/components/shared/header";

export default function Projects() {
  return (
    <>
      <Header />
      <div className={styles.projects}>
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
      </div>
      <Footer />
    </>
  );
}
