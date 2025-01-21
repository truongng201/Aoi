import styles from "@/components/projects/projectDesc.module.css";
import Image from "next/image";
import Link from "next/link";

const ProjectDesc = () => {
  return (
    <div className={styles.projectDesc}>
      <div className={styles.goal}>
        <h2 className={styles.header}>Goal</h2>
        <p className={styles.description}>
          IONAH Show Hanoi, a fusion of traditional fairy tales and modern stage
          arts, sought to captivate audiences and become a cultural landmark in
          Hanoi. Blending circus, hip-hop, belly dancing, and advanced visuals,
          the show offered a unique 90-minute journey through a magical world.
          The IONAH team partnered with À Ơi to create a campaign that
          highlighted its vibrant mix of modernity and Vietnamese heritage,
          resonating with both young audiences and tourists.
        </p>
      </div>
    </div>
  );
};

export default ProjectDesc;
