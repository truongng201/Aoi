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
      <Image
        src="/projects/central-circus/central-circus.png"
        alt="Central Circus"
        width={250}
        height={250}
        className={styles.cornerImg}
      />
    </div>
  );
};

export default ProjectIntro;
