import styles from "./village.module.css";
import Footer from "@/components/footer";
import Link from 'next/link';

export default function OurVillage() {
  return (
    <>
      <div className={styles.intro}>
        <button className={styles.navigationButton}>
          <span>&#8594;</span>
        </button>
        <div className={styles.content}>
          <div className={styles.header}>
            <Link href="/">
              <img className={styles.logo} src="/logo.png" alt="Logo" />
            </Link>
            <h2 className={styles.subtitle}>OUR VILLAGE</h2>
          </div>
          <p className={styles.tagline}>
            Every culture thrives forever <br />
            with the <span className={styles.highlight}>right villagers.</span>
          </p>
        </div>
        <div className={styles.graphicRight}>
          <svg width="429" height="204" viewBox="0 0 429 204" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M203.401 55.1763L216.317 31.2595L184.767 17.8538L169.114 45.945L148.846 41.7882L184.315 0L243.303 16.8653L240.522 59.0859L203.401 55.1763Z" fill="#F3E0C7"/>
            <path d="M406.62 114.818C359.479 95.579 280.449 96.1879 231.674 104.89C221.105 106.77 211.05 106.717 201.663 105.349L200.351 80.8141C205.896 82.4733 211.928 83.6559 218.394 84.0089C252.22 85.8887 271.324 81.0436 329.19 83.3205C378.487 85.2621 428.192 116.53 428.192 116.53L427.114 123.829C422.534 121.323 415.598 118.481 406.612 114.818H406.62Z" fill="#F3E0C7"/>
            <path d="M156.642 79.7901L128.413 67.5052L112.882 92.5428L92.0578 89.9658L125.51 49.8103L186.975 62.4218L189.235 104.695L144.388 105.022L156.642 79.7901Z" fill="#F3E0C7"/>
            <path d="M424.428 148.363C372.542 119.716 262.059 134.455 196.657 151.549C178.927 156.183 162.465 156.65 147.664 154.682L144.266 127.765C152.697 129.468 162.074 130.413 172.13 129.927C212.788 127.959 222.461 116.477 307.01 114.2C385.3 112.091 427.053 138.444 427.053 138.444L426.584 149.343C425.906 149.025 425.185 148.699 424.428 148.363Z" fill="#F3E0C7"/>
            <path d="M428.896 164.823C428.896 164.823 383.875 138.029 289.132 149.21C216.195 157.824 193.624 172.783 145.448 177.84C97.2724 182.897 40.7967 161.601 40.7967 161.601L69.7559 116.733L104.052 126.847L91.0495 152.961L134.497 149.219L129.195 107.202L65.2017 99.2853L0 175.157C0 175.157 88.2335 221.278 175.754 196.108C253.454 173.763 366.623 149.616 429 175.969L428.887 164.814L428.896 164.823Z" fill="#F3E0C7"/>
          </svg>
        </div>
        <div className={styles.graphicLeft}>
          <svg width="424" height="205" viewBox="0 0 424 205" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M220.599 56.1443L207.683 32.2275L239.233 18.8218L254.886 46.913L275.154 42.7562L239.685 0.968018L180.697 17.8334L183.478 60.0539L220.599 56.1443Z" fill="#F3E0C7"/>
            <path d="M17.3798 115.786C64.5211 96.547 143.551 97.1559 192.326 105.858C202.895 107.738 212.95 107.685 222.337 106.317L223.649 81.7821C218.104 83.4413 212.072 84.6239 205.606 84.9769C171.78 86.8567 152.676 82.0116 94.8101 84.2885C45.5134 86.2301 -4.19189 117.498 -4.19189 117.498L-3.11416 124.797C1.46613 122.291 8.40174 119.449 17.3885 115.786H17.3798Z" fill="#F3E0C7"/>
            <path d="M267.358 80.7581L295.587 68.4732L311.118 93.5108L331.942 90.9338L298.49 50.7783L237.025 63.3898L234.765 105.663L279.612 105.99L267.358 80.7581Z" fill="#F3E0C7"/>
            <path d="M-0.428448 149.331C51.4583 120.684 161.941 135.423 227.343 152.517C245.073 157.151 261.535 157.618 276.336 155.65L279.734 128.733C271.303 130.436 261.926 131.381 251.87 130.895C211.212 128.927 201.539 117.445 116.99 115.168C38.6995 113.059 -3.05322 139.412 -3.05322 139.412L-2.58389 150.311C-1.90597 149.993 -1.18459 149.667 -0.428448 149.331Z" fill="#F3E0C7"/>
            <path d="M-4.89571 165.791C-4.89571 165.791 40.125 138.997 134.868 150.178C207.805 158.792 230.376 173.751 278.552 178.808C326.728 183.865 383.203 162.569 383.203 162.569L354.244 117.701L319.948 127.815L332.951 153.929L289.503 150.187L294.805 108.17L358.798 100.253L424 176.125C424 176.125 335.766 222.246 248.246 197.077C170.546 174.731 57.3771 150.584 -5 176.937L-4.88701 165.782L-4.89571 165.791Z" fill="#F3E0C7"/>
          </svg>
        </div>
      </div>
      <div className={styles.values}>
        <div className={styles.header}>
          <h1 className={styles.subtitle}>Our Values</h1>
        </div>
        <div className={styles.valuesContainer}>
          <div className={styles.valueCard}>
            <div className={styles.iconContainer}>
              <img src="/logo1.png" alt="Cherish Our Culture" className={styles.icon} />
            </div>
            <h2 className={styles.cardTitle}>Celebrate Heritage</h2>
            <p className={styles.description}>
              We honor the timeless beauty of Vietnamese culture by bringing its stories to the world in innovative and meaningful ways.
            </p>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
      <div className={styles.people}></div>
      <Footer />
    </>
  );
}