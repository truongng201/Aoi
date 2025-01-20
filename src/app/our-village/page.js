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
          <h2 className={styles.subtitle}>Our Values</h2>
        </div>
        <div className={styles.valuesContainer}>
          <div className={styles.valueCard}>
            <img src="/à 1-01.png" className={styles.icon} />
            <div className={styles.cardTextBox}>
              <h2 className={styles.cardTitle}>Celebrate Heritage</h2>
              <p className={styles.description}>
                We honor the timeless beauty of Vietnamese culture by bringing its stories to the world in innovative and meaningful ways.
              </p>
            </div>
          </div>
          <div className={styles.valueCard}>
            <img src="/à 2-01.png" className={styles.icon} />
            <div className={styles.cardTextBox}>
              <h2 className={styles.cardTitle}>Embrace the Challenge</h2>
              <p className={styles.description}>
                We thrive on challenges, transforming obstacles into opportunities to push boundaries and redefine possibilities.
              </p>
            </div>
          </div>
          <div className={styles.valueCard}>
            <img src="/à 3-01.png" className={styles.icon} />
            <div className={styles.cardTextBox}>
              <h2 className={styles.cardTitle}>Think Beyond Borders</h2>
              <p className={styles.description}>
                Push boundaries to connect Vietnam with the world, blending bold ideas with cultural depth to spark global curiosity.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.border}></div>
      </div>
      <div className={styles.people}>
      <svg width="1346" height="73" viewBox="0 0 1346 73" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.peopleSvg}> 
        <path d="M519.358 52.192C523.454 52.192 526.952 50.7413 529.854 47.84C532.712 44.9813 534.142 41.5253 534.142 37.472C534.142 33.4187 532.712 29.9627 529.854 27.104C526.995 24.2453 523.496 22.816 519.358 22.816C515.304 22.816 511.848 24.2453 508.99 27.104C506.088 30.0053 504.638 33.4613 504.638 37.472C504.638 41.5253 506.088 45.0027 508.99 47.904C511.848 50.7627 515.304 52.192 519.358 52.192ZM519.358 14.56C523.624 14.56 527.507 15.584 531.006 17.632C534.462 19.7227 537.235 22.496 539.326 25.952C541.416 29.3653 542.462 33.2053 542.462 37.472C542.462 41.7387 541.416 45.5787 539.326 48.992C537.235 52.4907 534.462 55.264 531.006 57.312C527.507 59.4027 523.624 60.448 519.358 60.448C515.134 60.448 511.272 59.4027 507.774 57.312C504.275 55.264 501.502 52.4907 499.454 48.992C497.363 45.5787 496.318 41.7387 496.318 37.472C496.318 33.2907 497.363 29.4507 499.454 25.952C501.502 22.496 504.275 19.7227 507.774 17.632C511.315 15.584 515.176 14.56 519.358 14.56ZM554.849 15.2V43.744C554.849 46.2187 555.724 48.2667 557.473 49.888C559.223 51.552 561.335 52.384 563.809 52.384C566.284 52.384 568.417 51.552 570.209 49.888C571.959 48.2667 572.833 46.2187 572.833 43.744V15.2H580.705V43.744C580.705 48.3947 579.063 52.3627 575.777 55.648C572.535 58.976 568.567 60.64 563.873 60.64H563.809C559.159 60.64 555.191 58.976 551.905 55.648C548.577 52.3627 546.913 48.3947 546.913 43.744V15.2H554.849ZM600.103 41.184C602.621 41.184 604.775 40.288 606.567 38.496C608.317 36.7467 609.191 34.6347 609.191 32.16C609.191 29.6853 608.317 27.5307 606.567 25.696C604.733 23.9467 602.578 23.072 600.103 23.072H595.111V41.184H600.103ZM617.127 32.16C617.127 35.3173 616.317 38.2187 614.695 40.864C612.989 43.552 610.813 45.6213 608.167 47.072L616.999 60H607.719L600.423 49.056H595.111V60H587.239V15.2H600.103C604.754 15.2 608.765 16.8427 612.135 20.128C615.463 23.456 617.127 27.4667 617.127 32.16ZM651.664 60L638.288 15.2H646.928L657.168 51.424L667.472 15.2H676.112L662.736 60H651.664ZM687.672 14.816V59.616H679.8V14.816H687.672ZM702.611 15.2V52.128H719.635V60H694.739V15.2H702.611ZM731.299 15.2V52.128H748.323V60H723.427V15.2H731.299ZM787.25 60H778.93L775.474 48.288H760.69L757.234 60H748.914L762.29 15.2H773.874L787.25 60ZM773.106 40.352L768.114 23.52L763.058 40.352H773.106ZM810.032 60C805.893 60 802.117 58.9973 798.704 56.992C795.29 54.9867 792.581 52.2773 790.576 48.864C788.528 45.4507 787.504 41.696 787.504 37.6C787.504 33.4613 788.528 29.7067 790.576 26.336C792.538 23.008 795.248 20.2987 798.704 18.208C802.117 16.2027 805.893 15.2 810.032 15.2H817.968V23.264H810.032C806.106 23.264 802.714 24.6507 799.856 27.424C797.04 30.24 795.632 33.632 795.632 37.6C795.632 41.568 797.04 44.96 799.856 47.776C802.672 50.592 806.064 52 810.032 52V41.568H803.248V33.632H817.968V60H810.032ZM832.424 23.072V33.632H844.392V41.568H832.424V52.128H849.448V60H824.552V15.2H849.448V23.072H832.424Z" fill="#365F2E"/>
        <path d="M40.0926 52.192C44.1886 52.192 47.6873 50.7413 50.5886 47.84C53.4473 44.9813 54.8766 41.5253 54.8766 37.472C54.8766 33.4187 53.4473 29.9627 50.5886 27.104C47.7299 24.2453 44.2313 22.816 40.0926 22.816C36.0393 22.816 32.5833 24.2453 29.7246 27.104C26.8233 30.0053 25.3726 33.4613 25.3726 37.472C25.3726 41.5253 26.8233 45.0027 29.7246 47.904C32.5833 50.7627 36.0393 52.192 40.0926 52.192ZM40.0926 14.56C44.3593 14.56 48.2419 15.584 51.7406 17.632C55.1966 19.7227 57.9699 22.496 60.0606 25.952C62.1513 29.3653 63.1966 33.2053 63.1966 37.472C63.1966 41.7387 62.1513 45.5787 60.0606 48.992C57.9699 52.4907 55.1966 55.264 51.7406 57.312C48.2419 59.4027 44.3593 60.448 40.0926 60.448C35.8686 60.448 32.0073 59.4027 28.5086 57.312C25.0099 55.264 22.2366 52.4907 20.1886 48.992C18.0979 45.5787 17.0526 41.7387 17.0526 37.472C17.0526 33.2907 18.0979 29.4507 20.1886 25.952C22.2366 22.496 25.0099 19.7227 28.5086 17.632C32.0499 15.584 35.9113 14.56 40.0926 14.56ZM75.5841 15.2V43.744C75.5841 46.2187 76.4588 48.2667 78.2081 49.888C79.9574 51.552 82.0694 52.384 84.5441 52.384C87.0188 52.384 89.1521 51.552 90.9441 49.888C92.6934 48.2667 93.5681 46.2187 93.5681 43.744V15.2H101.44V43.744C101.44 48.3947 99.7974 52.3627 96.5121 55.648C93.2694 58.976 89.3014 60.64 84.6081 60.64H84.5441C79.8934 60.64 75.9254 58.976 72.6401 55.648C69.3121 52.3627 67.6481 48.3947 67.6481 43.744V15.2H75.5841ZM120.838 41.184C123.355 41.184 125.51 40.288 127.302 38.496C129.051 36.7467 129.926 34.6347 129.926 32.16C129.926 29.6853 129.051 27.5307 127.302 25.696C125.467 23.9467 123.313 23.072 120.838 23.072H115.846V41.184H120.838ZM137.862 32.16C137.862 35.3173 137.051 38.2187 135.43 40.864C133.723 43.552 131.547 45.6213 128.902 47.072L137.734 60H128.454L121.158 49.056H115.846V60H107.974V15.2H120.838C125.489 15.2 129.499 16.8427 132.87 20.128C136.198 23.456 137.862 27.4667 137.862 32.16ZM172.399 60L159.023 15.2H167.663L177.903 51.424L188.207 15.2H196.847L183.471 60H172.399ZM208.407 14.816V59.616H200.535V14.816H208.407ZM223.346 15.2V52.128H240.37V60H215.474V15.2H223.346ZM252.034 15.2V52.128H269.058V60H244.162V15.2H252.034ZM307.985 60H299.665L296.209 48.288H281.425L277.969 60H269.649L283.025 15.2H294.609L307.985 60ZM293.841 40.352L288.849 23.52L283.793 40.352H293.841ZM330.767 60C326.628 60 322.852 58.9973 319.439 56.992C316.025 54.9867 313.316 52.2773 311.311 48.864C309.263 45.4507 308.239 41.696 308.239 37.6C308.239 33.4613 309.263 29.7067 311.311 26.336C313.273 23.008 315.983 20.2987 319.439 18.208C322.852 16.2027 326.628 15.2 330.767 15.2H338.703V23.264H330.767C326.841 23.264 323.449 24.6507 320.591 27.424C317.775 30.24 316.367 33.632 316.367 37.6C316.367 41.568 317.775 44.96 320.591 47.776C323.407 50.592 326.799 52 330.767 52V41.568H323.983V33.632H338.703V60H330.767ZM353.159 23.072V33.632H365.127V41.568H353.159V52.128H370.183V60H345.287V15.2H370.183V23.072H353.159Z" fill="#365F2E"/>
        <path d="M998.622 52.192C1002.72 52.192 1006.22 50.7413 1009.12 47.84C1011.98 44.9813 1013.41 41.5253 1013.41 37.472C1013.41 33.4187 1011.98 29.9627 1009.12 27.104C1006.26 24.2453 1002.76 22.816 998.622 22.816C994.569 22.816 991.113 24.2453 988.254 27.104C985.353 30.0053 983.902 33.4613 983.902 37.472C983.902 41.5253 985.353 45.0027 988.254 47.904C991.113 50.7627 994.569 52.192 998.622 52.192ZM998.622 14.56C1002.89 14.56 1006.77 15.584 1010.27 17.632C1013.73 19.7227 1016.5 22.496 1018.59 25.952C1020.68 29.3653 1021.73 33.2053 1021.73 37.472C1021.73 41.7387 1020.68 45.5787 1018.59 48.992C1016.5 52.4907 1013.73 55.264 1010.27 57.312C1006.77 59.4027 1002.89 60.448 998.622 60.448C994.398 60.448 990.537 59.4027 987.038 57.312C983.54 55.264 980.766 52.4907 978.718 48.992C976.628 45.5787 975.582 41.7387 975.582 37.472C975.582 33.2907 976.628 29.4507 978.718 25.952C980.766 22.496 983.54 19.7227 987.038 17.632C990.58 15.584 994.441 14.56 998.622 14.56ZM1034.11 15.2V43.744C1034.11 46.2187 1034.99 48.2667 1036.74 49.888C1038.49 51.552 1040.6 52.384 1043.07 52.384C1045.55 52.384 1047.68 51.552 1049.47 49.888C1051.22 48.2667 1052.1 46.2187 1052.1 43.744V15.2H1059.97V43.744C1059.97 48.3947 1058.33 52.3627 1055.04 55.648C1051.8 58.976 1047.83 60.64 1043.14 60.64H1043.07C1038.42 60.64 1034.46 58.976 1031.17 55.648C1027.84 52.3627 1026.18 48.3947 1026.18 43.744V15.2H1034.11ZM1079.37 41.184C1081.89 41.184 1084.04 40.288 1085.83 38.496C1087.58 36.7467 1088.46 34.6347 1088.46 32.16C1088.46 29.6853 1087.58 27.5307 1085.83 25.696C1084 23.9467 1081.84 23.072 1079.37 23.072H1074.38V41.184H1079.37ZM1096.39 32.16C1096.39 35.3173 1095.58 38.2187 1093.96 40.864C1092.25 43.552 1090.08 45.6213 1087.43 47.072L1096.26 60H1086.98L1079.69 49.056H1074.38V60H1066.5V15.2H1079.37C1084.02 15.2 1088.03 16.8427 1091.4 20.128C1094.73 23.456 1096.39 27.4667 1096.39 32.16ZM1130.93 60L1117.55 15.2H1126.19L1136.43 51.424L1146.74 15.2H1155.38L1142 60H1130.93ZM1166.94 14.816V59.616H1159.06V14.816H1166.94ZM1181.88 15.2V52.128H1198.9V60H1174V15.2H1181.88ZM1210.56 15.2V52.128H1227.59V60H1202.69V15.2H1210.56ZM1266.51 60H1258.19L1254.74 48.288H1239.95L1236.5 60H1228.18L1241.55 15.2H1253.14L1266.51 60ZM1252.37 40.352L1247.38 23.52L1242.32 40.352H1252.37ZM1289.3 60C1285.16 60 1281.38 58.9973 1277.97 56.992C1274.56 54.9867 1271.85 52.2773 1269.84 48.864C1267.79 45.4507 1266.77 41.696 1266.77 37.6C1266.77 33.4613 1267.79 29.7067 1269.84 26.336C1271.8 23.008 1274.51 20.2987 1277.97 18.208C1281.38 16.2027 1285.16 15.2 1289.3 15.2H1297.23V23.264H1289.3C1285.37 23.264 1281.98 24.6507 1279.12 27.424C1276.3 30.24 1274.9 33.632 1274.9 37.6C1274.9 41.568 1276.3 44.96 1279.12 47.776C1281.94 50.592 1285.33 52 1289.3 52V41.568H1282.51V33.632H1297.23V60H1289.3ZM1311.69 23.072V33.632H1323.66V41.568H1311.69V52.128H1328.71V60H1303.82V15.2H1328.71V23.072H1311.69Z" fill="#365F2E"/>
        <line x1="389.47" y1="35" x2="477.265" y2="35" stroke="#365F2E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="868.735" y1="35" x2="956.53" y2="35" stroke="#365F2E" strokeWidth="4" strokeLinecap="round"/>
      </svg>

        <div className={styles.peopleGrid}>
          <div className={styles.peopleCard}>
            <img src="people/hai_dang.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>TRAN HAI DANG</h2>
              <div className={styles.peopleRole}>
                <p>President</p>
                <p>Director of Product Development</p>
              </div>
              <p className={styles.peopleQuote}>
                "Creativity with Impact"
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/le_ngoc_linh.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>LE NGOC LINH</h2>
              <div className={styles.peopleRole}>
                <p>Vice-President</p>
                <p>Manager of Product Development</p>
                <p>Director of Partnership</p>
              </div>
              <p className={styles.peopleQuote}>
                “Every corner in Vietnam deserves its spotlight (and tourists deserve the adventure).”
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/nhat_anh.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>VIET NHAT ANH</h2>
              <div className={styles.peopleRole}>
                <p>Manager of Human Growth</p>
                <p>Associate of Product Development</p>
                <p>Associate of Partnership</p>
              </div>
              <p className={styles.peopleQuote}>
                "Just like my passion for culinary arts, where I discovered the beauty of culture through each dish, the À Ơi project is my way of breathing life into those traditional values, ensuring they endure through time."
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/uyen_khanh.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>DANG QUANG UYEN KHANH</h2>
              <div className={styles.peopleRole}>
                <p>Director of Brand Development</p>
                <p>Associate of Product Development</p>
                <p>Associate of Partnership</p>
              </div>
              <p className={styles.peopleQuote}>
                "Every small action can contribute to preserving and spreading sustainable values, and À Ơi is where I choose to place my trust in that belief. I hope that À Ơi will bring a fresh image of Vietnam to the world."
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/ha_thuong.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>TRAN THI HA THUONG</h2>
              <div className={styles.peopleRole}>
                <p>Designer of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                "Every small action can contribute to preserving and spreading sustainable values, and À Ơi is where I choose to place my trust in that belief. I hope that À Ơi will bring a fresh image of Vietnam to the world."
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/thuy_duong.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>NGUYEN THUY DUONG</h2>
              <div className={styles.peopleRole}>
                <p>Associate of Human Growth</p>
                <p>Content Creator of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                “In this digital age, many fear that culture may fade, but at À Ơi, we remain committed to the enduring beauty of Vietnamese heritage. I hope À Ơi will inspire confidence, pride, and a sense of cultural pride as we work together to preserve and share the beauty of our homeland.”
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/phuong_anh.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>DANG DO PHUONG ANH</h2>
              <div className={styles.peopleRole}>
                <p>Visual Manager of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                “Throughout my journey to reconnect with my roots, I was deeply focused on preserving the essence of old traditions. Luckily, I found my companions at À Ơi. In a society where the beauty of the past is fading, À Ơi serves as a bamboo bridge linking the present and the past, fostering cultural values that endure across generations.”
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/cat_tuong.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>NGUYEN TONG CAT TUONG</h2>
              <div className={styles.peopleRole}>
                <p>Designer of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                “À Ơi is not just a project; it is a heartfelt journey to preserve and promote the cultural values of Vietnam. In this era of change, where traditions may fade in the eyes of the younger generation, À Ơi serves as a bridge connecting the present to the past, breathing life into timeless values.”
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/hien_luong.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>NGUYEN THI HIEN LUONG</h2>
              <div className={styles.peopleRole}>
                <p>Design Manager of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                “The era of innovation calls for new approaches to developing and promoting culture and the arts. While this will undoubtedly be a challenging journey for À Ơi, we must try to know what’s possible.”
              </p>
            </div>
          </div>
          <div className={styles.peopleCard}>
            <img src="people/thao_linh.jpg" className={styles.peopleImg}/>
            <div className={styles.peopleInfo}>
              <h2 className={styles.peopleName}>NGUYEN THAO LINH</h2>
              <div className={styles.peopleRole}>
                <p>Content Creator of Brand Development</p>
              </div>
              <p className={styles.peopleQuote}>
                “As artist Tự Long once said, "The value of tradition lies in connection. Don’t say today’s youth don’t love tradition or their country—they do, passionately, though their expressions differ from the past. They embrace global influences while showcasing Vietnam’s beauty to the world." I believe À Ơi embodies this spirit, created by talented, creative youth to inspire and preserve our cultural heritage.”
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}