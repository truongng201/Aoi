import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@/public/components/home/image1.png";
import image2 from "@/public/components/home/image2.png";

export default function SecondBlock() {
  return (
    <div className={styles.secondBlock}>
      <div className={styles.firstContent}>
        We craft <span>stories and campaigns</span> celebrating the beauty of
        Vietnam's cultural heritage for brands, organizations, and creative
        projects.
      </div>
      <div className={styles.firstImage}>
        <Image src={image1} alt="image1" />
      </div>
      <div className={styles.secondContent}>
        Vietnamese culture is a treasure of beauty and history, connecting
        people through shared heritage and inspiring pride. Celebrating these
        traditions preserves their essence and enriches the world with timeless
        values.
      </div>
      <div className={styles.divider}></div>
      <div className={styles.thirdContent}>
        “I’d like to borrow the words of artist <br /> Tự Long when speaking
        about the <br /> younger generation and tradition:
        <br /> "The value of tradition lies in its ability
        <br /> to connect. Don’t say today’s youth
        <br /> don’t love tradition or their nation.
        <br /> They love it deeply, passionately. But
        <br /> their way of expressing it differs from
        <br /> the generations before. They’ve
        <br /> embraced the cultural essence of <br /> other nations while
        bringing
        <br /> the finest aspects of Vietnamese culture
        <br /> to the world" (NSND Tự Long).
        <br /> And I believe that À Ơi is a project
        <br /> created by talented and creative
        <br /> young individuals with the very
        <br /> purpose of inspiring others in the
        <br /> same way!”
      </div>
      <div className={styles.forthContent}>
        “Throughout my journey of
        <br /> reconnecting with my roots, I’ve been
        <br />
        tirelessly searching for a way to
        <br /> preserve the timeless values of the
        <br />
        past. Fortunately, I found my
        <br /> companions at À Ơi. In a society where
        <br /> the beauty and wisdom of earlier
        <br /> times are gradually fading, À Ơi serves
        <br /> as a bamboo bridge connecting the
        <br /> present and the past, creating
        <br /> enduring cultural values for
        <br /> generations to come.”
      </div>
      <div className={styles.secondImage}>
        <Image src={image2} alt="image2" />
      </div>
      <div className={styles.fifthContent}>
        Nguyen Thao Linh Content <br />
        Creator of Brand Development
      </div>
      <div className={styles.sixthContent}>
        Dang Do Phuong Anh <br />
        Visual Manager of Brand Development
      </div>
    </div>
  );
}
