import FirstBlock from "@/components/reach-for-us/firstblock";
import SecondBlock from "@/components/reach-for-us/secondblock";

import styles from "./reachforus.module.css";

export default function ReachForUs() {
  return (
    <div className={styles.reachforus}>
      <FirstBlock />
      <SecondBlock />
    </div>
  );
}
