import styles from "./thirdblock.module.css";
import Link from "next/link";

export default function ThirdBlock() {
  return (
    <div className={styles.thirdblock}>
      <div className={styles.firstContent}>
        À Ơi isn’t just a name—it’s a movement. <br /> It’s{" "}
        <span>
          a bridge where generations meet,
          <br />
        </span>{" "}
        where <span>tradition finds new life,</span> and where <br /> cultural
        pride grows.
      </div>
      <div className={styles.secondContent}>
        Today, À Ơi stands as a vibrant community committed to celebrating and{" "}
        <br />
        preserving Vietnam’s heritage. And every day, we take one more step
        toward <br /> our vision: bringing Vietnamese culture closer to modern
        hearts while ensuring <br /> its legacy endures for generations to come.
      </div>
      <Link href="reach-for-us">
        {" "}
        <div className={styles.workWithUs}>
          <p>WORK WITH US</p>
        </div>
      </Link>
    </div>
  );
}
