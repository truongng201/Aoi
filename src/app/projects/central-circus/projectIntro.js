import styles from "@/components/projects/projectIntro.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <div className={styles.projectIntro}>
      <div className={styles.content}>
        <div className={styles.header}>
          <Link href="/" passHref>
            <Image
              className={styles.logo}
              src="/village/logo.png"
              alt="Logo"
              width={128}
              height={71}
            />
          </Link>
        </div>
        <p className={styles.subheader}>RẠP XIẾC TRUNG ƯƠNG</p>
        <p className={styles.title}>CENTRAL CIRCUS</p>
        <p className={styles.description}>
          Central Circus Hanoi is a timeless destination where tradition meets
          creativity, bringing to life the rich heritage of Vietnam through
          mesmerizing circus performances. Combining breathtaking acrobatics,
          playful comedy, and vibrant storytelling, each show is a celebration
          of artistry and culture.
        </p>
      </div>
      <Image src = "/projects/central-circus.png" alt = "Central Circus" width = {300} height = {300} className={styles.cornerImg}/>
    </div>
  );
};

export default ProjectIntro;
