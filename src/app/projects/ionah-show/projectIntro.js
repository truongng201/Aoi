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
        <p className={styles.title}>IONAH SHOW</p>
        <p className={styles.description}>
        Ionah Show Hanoi is a unique experience that blends modern dance, theater, circus, music, visuals, and lighting effects. It offers a fresh and distinctive performance style, carefully adapted to suit Vietnamese culture in general and the people of Hanoi in particular.
        </p>
      </div>
      <Image
        src="/projects/ionah-show/ionah-show.png"
        alt="Ionah Show"
        width={250}
        height={250}
        className={styles.cornerImg}
      />
    </div>
  );
};

export default ProjectIntro;
