import styles from "@/components/projects/projectIntro.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectIntro = () => {
  return (
    <div className={styles.projectIntro}>
      <div className={styles.back}>
        <Link href="/projects">
          <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.636 50.5391H79.7368"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M45.627 31.8945L24.6362 50.5388L45.627 67.2205"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
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
