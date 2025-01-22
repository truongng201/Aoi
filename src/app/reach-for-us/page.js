import FirstBlock from "@/components/reach-for-us/firstblock";
import SecondBlock from "@/components/reach-for-us/secondblock";

import styles from "./reachforus.module.css";
import Header from "@/components/shared/header";

export default function ReachForUs() {
  return (
    <>
      <Header />
      <div className={styles.reachforus}>
        <FirstBlock />
        <SecondBlock />
      </div>
    </>
  );
}
