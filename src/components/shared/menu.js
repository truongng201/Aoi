import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.content}>
        <div className={styles.closemenu} onClick={() => setMenuOpen(false)}>
          <svg
            width="67"
            height="63"
            viewBox="0 0 67 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.5047 15.2442L11.4536 49.094"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M27.8887 12.8955L56.5046 15.2441L49.5903 41.7784"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className={styles.menuitems}>
          <div className={styles.menuitem}>
            <Link href="/">HOME PAGE</Link>
          </div>
          <div className={styles.menuitem}>
            <Link href="/our-village">OUR VILLAGE</Link>
          </div>
          <div className={styles.menuitem}>
            <Link href="/projects">PROJECTS</Link>
          </div>
          <div className={styles.menuitem}>
            <Link href="/reach-for-us">REACH FOR US</Link>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.section1}>
          <div className={styles.header}>BY EMAIL</div>
          <div className={styles.body}>trhaidang2202@gmail.com</div>
        </div>
        <div className={styles.section2}>
          <div className={styles.header}>BY HOTLINE</div>
          <div className={styles.body}>0866899176</div>
        </div>
        <div className={styles.socialicons}>
          <svg
            width="53"
            height="37"
            viewBox="0 0 53 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M51.6546 6.07158C51.0461 3.82863 49.2592 2.06834 46.9894 1.47211C42.8748 0.383759 26.3778 0.383759 26.3778 0.383759C26.3778 0.383759 9.88082 0.383759 5.76622 1.47211C3.49644 2.06834 1.70958 3.82863 1.10109 6.07158C0 10.1316 0 18.5924 0 18.5924C0 18.5924 0 27.0531 1.10109 31.1132C1.70958 33.3561 3.49644 35.0407 5.76622 35.6369C9.88082 36.7253 26.3778 36.7253 26.3778 36.7253C26.3778 36.7253 42.8748 36.7253 46.9894 35.6369C49.2592 35.0407 51.0461 33.3467 51.6546 31.1132C52.7556 27.0531 52.7556 18.5924 52.7556 18.5924C52.7556 18.5924 52.7556 10.1316 51.6546 6.07158ZM20.9883 26.2771V10.9077L34.7712 18.5924L20.9883 26.2771Z"
              fill="white"
            />
          </svg>
          <svg
            width="50"
            height="49"
            viewBox="0 0 50 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.2146 24.2277C49.2146 10.8457 38.369 0 24.987 0C11.6049 0 0.759277 10.8457 0.759277 24.2277C0.759277 35.5844 8.58595 45.1241 19.1382 47.7456V31.6285H14.1413V24.2277H19.1382V21.0383C19.1382 12.7952 22.867 8.97181 30.9682 8.97181C32.5013 8.97181 35.1512 9.27466 36.2396 9.5775V16.278C35.6717 16.2212 34.678 16.1833 33.4383 16.1833C29.4634 16.1833 27.9302 17.6881 27.9302 21.5967V24.2277H35.8421L34.4793 31.6285H27.9208V48.2755C39.921 46.8276 49.2146 36.616 49.2146 24.2277Z"
              fill="white"
            />
          </svg>
          <svg
            width="44"
            height="49"
            viewBox="0 0 44 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.9997 19.8648C39.7694 19.8743 35.6353 18.5682 32.1935 16.1455V33.067C32.1935 41.5656 25.1944 48.4554 16.5512 48.4459C7.91772 48.4459 0.928223 41.5561 0.928223 33.0575C0.928223 24.5589 7.92733 17.6692 16.5705 17.6786C17.2915 17.6786 18.003 17.726 18.7144 17.8301V26.3381C14.9361 25.1646 10.9077 27.2372 9.71556 30.9565C8.52341 34.6759 10.6289 38.6413 14.4073 39.8148C18.1856 40.9883 22.214 38.9157 23.4061 35.1964C23.6273 34.515 23.733 33.7957 23.733 33.0765V0H32.1935C32.1935 0.700331 32.2512 1.41013 32.3761 2.10099C32.9722 5.22409 34.847 7.96864 37.5582 9.69107C39.4714 10.9308 41.7115 11.5933 43.9997 11.5933V19.8648Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
