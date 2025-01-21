import styles from "./people.module.css";
import Image from "next/image";

const People = () => {
  return (
    <div className={styles.people}>
      <svg
        width="1346"
        height="73"
        viewBox="0 0 1346 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.peopleSvg}
      >
        <path
          d="M519.358 52.192C523.454 52.192 526.952 50.7413 529.854 47.84C532.712 44.9813 534.142 41.5253 534.142 37.472C534.142 33.4187 532.712 29.9627 529.854 27.104C526.995 24.2453 523.496 22.816 519.358 22.816C515.304 22.816 511.848 24.2453 508.99 27.104C506.088 30.0053 504.638 33.4613 504.638 37.472C504.638 41.5253 506.088 45.0027 508.99 47.904C511.848 50.7627 515.304 52.192 519.358 52.192ZM519.358 14.56C523.624 14.56 527.507 15.584 531.006 17.632C534.462 19.7227 537.235 22.496 539.326 25.952C541.416 29.3653 542.462 33.2053 542.462 37.472C542.462 41.7387 541.416 45.5787 539.326 48.992C537.235 52.4907 534.462 55.264 531.006 57.312C527.507 59.4027 523.624 60.448 519.358 60.448C515.134 60.448 511.272 59.4027 507.774 57.312C504.275 55.264 501.502 52.4907 499.454 48.992C497.363 45.5787 496.318 41.7387 496.318 37.472C496.318 33.2907 497.363 29.4507 499.454 25.952C501.502 22.496 504.275 19.7227 507.774 17.632C511.315 15.584 515.176 14.56 519.358 14.56ZM554.849 15.2V43.744C554.849 46.2187 555.724 48.2667 557.473 49.888C559.223 51.552 561.335 52.384 563.809 52.384C566.284 52.384 568.417 51.552 570.209 49.888C571.959 48.2667 572.833 46.2187 572.833 43.744V15.2H580.705V43.744C580.705 48.3947 579.063 52.3627 575.777 55.648C572.535 58.976 568.567 60.64 563.873 60.64H563.809C559.159 60.64 555.191 58.976 551.905 55.648C548.577 52.3627 546.913 48.3947 546.913 43.744V15.2H554.849ZM600.103 41.184C602.621 41.184 604.775 40.288 606.567 38.496C608.317 36.7467 609.191 34.6347 609.191 32.16C609.191 29.6853 608.317 27.5307 606.567 25.696C604.733 23.9467 602.578 23.072 600.103 23.072H595.111V41.184H600.103ZM617.127 32.16C617.127 35.3173 616.317 38.2187 614.695 40.864C612.989 43.552 610.813 45.6213 608.167 47.072L616.999 60H607.719L600.423 49.056H595.111V60H587.239V15.2H600.103C604.754 15.2 608.765 16.8427 612.135 20.128C615.463 23.456 617.127 27.4667 617.127 32.16ZM651.664 60L638.288 15.2H646.928L657.168 51.424L667.472 15.2H676.112L662.736 60H651.664ZM687.672 14.816V59.616H679.8V14.816H687.672ZM702.611 15.2V52.128H719.635V60H694.739V15.2H702.611ZM731.299 15.2V52.128H748.323V60H723.427V15.2H731.299ZM787.25 60H778.93L775.474 48.288H760.69L757.234 60H748.914L762.29 15.2H773.874L787.25 60ZM773.106 40.352L768.114 23.52L763.058 40.352H773.106ZM810.032 60C805.893 60 802.117 58.9973 798.704 56.992C795.29 54.9867 792.581 52.2773 790.576 48.864C788.528 45.4507 787.504 41.696 787.504 37.6C787.504 33.4613 788.528 29.7067 790.576 26.336C792.538 23.008 795.248 20.2987 798.704 18.208C802.117 16.2027 805.893 15.2 810.032 15.2H817.968V23.264H810.032C806.106 23.264 802.714 24.6507 799.856 27.424C797.04 30.24 795.632 33.632 795.632 37.6C795.632 41.568 797.04 44.96 799.856 47.776C802.672 50.592 806.064 52 810.032 52V41.568H803.248V33.632H817.968V60H810.032ZM832.424 23.072V33.632H844.392V41.568H832.424V52.128H849.448V60H824.552V15.2H849.448V23.072H832.424Z"
          fill="#365F2E"
        />
        <path
          d="M40.0926 52.192C44.1886 52.192 47.6873 50.7413 50.5886 47.84C53.4473 44.9813 54.8766 41.5253 54.8766 37.472C54.8766 33.4187 53.4473 29.9627 50.5886 27.104C47.7299 24.2453 44.2313 22.816 40.0926 22.816C36.0393 22.816 32.5833 24.2453 29.7246 27.104C26.8233 30.0053 25.3726 33.4613 25.3726 37.472C25.3726 41.5253 26.8233 45.0027 29.7246 47.904C32.5833 50.7627 36.0393 52.192 40.0926 52.192ZM40.0926 14.56C44.3593 14.56 48.2419 15.584 51.7406 17.632C55.1966 19.7227 57.9699 22.496 60.0606 25.952C62.1513 29.3653 63.1966 33.2053 63.1966 37.472C63.1966 41.7387 62.1513 45.5787 60.0606 48.992C57.9699 52.4907 55.1966 55.264 51.7406 57.312C48.2419 59.4027 44.3593 60.448 40.0926 60.448C35.8686 60.448 32.0073 59.4027 28.5086 57.312C25.0099 55.264 22.2366 52.4907 20.1886 48.992C18.0979 45.5787 17.0526 41.7387 17.0526 37.472C17.0526 33.2907 18.0979 29.4507 20.1886 25.952C22.2366 22.496 25.0099 19.7227 28.5086 17.632C32.0499 15.584 35.9113 14.56 40.0926 14.56ZM75.5841 15.2V43.744C75.5841 46.2187 76.4588 48.2667 78.2081 49.888C79.9574 51.552 82.0694 52.384 84.5441 52.384C87.0188 52.384 89.1521 51.552 90.9441 49.888C92.6934 48.2667 93.5681 46.2187 93.5681 43.744V15.2H101.44V43.744C101.44 48.3947 99.7974 52.3627 96.5121 55.648C93.2694 58.976 89.3014 60.64 84.6081 60.64H84.5441C79.8934 60.64 75.9254 58.976 72.6401 55.648C69.3121 52.3627 67.6481 48.3947 67.6481 43.744V15.2H75.5841ZM120.838 41.184C123.355 41.184 125.51 40.288 127.302 38.496C129.051 36.7467 129.926 34.6347 129.926 32.16C129.926 29.6853 129.051 27.5307 127.302 25.696C125.467 23.9467 123.313 23.072 120.838 23.072H115.846V41.184H120.838ZM137.862 32.16C137.862 35.3173 137.051 38.2187 135.43 40.864C133.723 43.552 131.547 45.6213 128.902 47.072L137.734 60H128.454L121.158 49.056H115.846V60H107.974V15.2H120.838C125.489 15.2 129.499 16.8427 132.87 20.128C136.198 23.456 137.862 27.4667 137.862 32.16ZM172.399 60L159.023 15.2H167.663L177.903 51.424L188.207 15.2H196.847L183.471 60H172.399ZM208.407 14.816V59.616H200.535V14.816H208.407ZM223.346 15.2V52.128H240.37V60H215.474V15.2H223.346ZM252.034 15.2V52.128H269.058V60H244.162V15.2H252.034ZM307.985 60H299.665L296.209 48.288H281.425L277.969 60H269.649L283.025 15.2H294.609L307.985 60ZM293.841 40.352L288.849 23.52L283.793 40.352H293.841ZM330.767 60C326.628 60 322.852 58.9973 319.439 56.992C316.025 54.9867 313.316 52.2773 311.311 48.864C309.263 45.4507 308.239 41.696 308.239 37.6C308.239 33.4613 309.263 29.7067 311.311 26.336C313.273 23.008 315.983 20.2987 319.439 18.208C322.852 16.2027 326.628 15.2 330.767 15.2H338.703V23.264H330.767C326.841 23.264 323.449 24.6507 320.591 27.424C317.775 30.24 316.367 33.632 316.367 37.6C316.367 41.568 317.775 44.96 320.591 47.776C323.407 50.592 326.799 52 330.767 52V41.568H323.983V33.632H338.703V60H330.767ZM353.159 23.072V33.632H365.127V41.568H353.159V52.128H370.183V60H345.287V15.2H370.183V23.072H353.159Z"
          fill="#365F2E"
        />
        <path
          d="M998.622 52.192C1002.72 52.192 1006.22 50.7413 1009.12 47.84C1011.98 44.9813 1013.41 41.5253 1013.41 37.472C1013.41 33.4187 1011.98 29.9627 1009.12 27.104C1006.26 24.2453 1002.76 22.816 998.622 22.816C994.569 22.816 991.113 24.2453 988.254 27.104C985.353 30.0053 983.902 33.4613 983.902 37.472C983.902 41.5253 985.353 45.0027 988.254 47.904C991.113 50.7627 994.569 52.192 998.622 52.192ZM998.622 14.56C1002.89 14.56 1006.77 15.584 1010.27 17.632C1013.73 19.7227 1016.5 22.496 1018.59 25.952C1020.68 29.3653 1021.73 33.2053 1021.73 37.472C1021.73 41.7387 1020.68 45.5787 1018.59 48.992C1016.5 52.4907 1013.73 55.264 1010.27 57.312C1006.77 59.4027 1002.89 60.448 998.622 60.448C994.398 60.448 990.537 59.4027 987.038 57.312C983.54 55.264 980.766 52.4907 978.718 48.992C976.628 45.5787 975.582 41.7387 975.582 37.472C975.582 33.2907 976.628 29.4507 978.718 25.952C980.766 22.496 983.54 19.7227 987.038 17.632C990.58 15.584 994.441 14.56 998.622 14.56ZM1034.11 15.2V43.744C1034.11 46.2187 1034.99 48.2667 1036.74 49.888C1038.49 51.552 1040.6 52.384 1043.07 52.384C1045.55 52.384 1047.68 51.552 1049.47 49.888C1051.22 48.2667 1052.1 46.2187 1052.1 43.744V15.2H1059.97V43.744C1059.97 48.3947 1058.33 52.3627 1055.04 55.648C1051.8 58.976 1047.83 60.64 1043.14 60.64H1043.07C1038.42 60.64 1034.46 58.976 1031.17 55.648C1027.84 52.3627 1026.18 48.3947 1026.18 43.744V15.2H1034.11ZM1079.37 41.184C1081.89 41.184 1084.04 40.288 1085.83 38.496C1087.58 36.7467 1088.46 34.6347 1088.46 32.16C1088.46 29.6853 1087.58 27.5307 1085.83 25.696C1084 23.9467 1081.84 23.072 1079.37 23.072H1074.38V41.184H1079.37ZM1096.39 32.16C1096.39 35.3173 1095.58 38.2187 1093.96 40.864C1092.25 43.552 1090.08 45.6213 1087.43 47.072L1096.26 60H1086.98L1079.69 49.056H1074.38V60H1066.5V15.2H1079.37C1084.02 15.2 1088.03 16.8427 1091.4 20.128C1094.73 23.456 1096.39 27.4667 1096.39 32.16ZM1130.93 60L1117.55 15.2H1126.19L1136.43 51.424L1146.74 15.2H1155.38L1142 60H1130.93ZM1166.94 14.816V59.616H1159.06V14.816H1166.94ZM1181.88 15.2V52.128H1198.9V60H1174V15.2H1181.88ZM1210.56 15.2V52.128H1227.59V60H1202.69V15.2H1210.56ZM1266.51 60H1258.19L1254.74 48.288H1239.95L1236.5 60H1228.18L1241.55 15.2H1253.14L1266.51 60ZM1252.37 40.352L1247.38 23.52L1242.32 40.352H1252.37ZM1289.3 60C1285.16 60 1281.38 58.9973 1277.97 56.992C1274.56 54.9867 1271.85 52.2773 1269.84 48.864C1267.79 45.4507 1266.77 41.696 1266.77 37.6C1266.77 33.4613 1267.79 29.7067 1269.84 26.336C1271.8 23.008 1274.51 20.2987 1277.97 18.208C1281.38 16.2027 1285.16 15.2 1289.3 15.2H1297.23V23.264H1289.3C1285.37 23.264 1281.98 24.6507 1279.12 27.424C1276.3 30.24 1274.9 33.632 1274.9 37.6C1274.9 41.568 1276.3 44.96 1279.12 47.776C1281.94 50.592 1285.33 52 1289.3 52V41.568H1282.51V33.632H1297.23V60H1289.3ZM1311.69 23.072V33.632H1323.66V41.568H1311.69V52.128H1328.71V60H1303.82V15.2H1328.71V23.072H1311.69Z"
          fill="#365F2E"
        />
        <line
          x1="389.47"
          y1="35"
          x2="477.265"
          y2="35"
          stroke="#365F2E"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="868.735"
          y1="35"
          x2="956.53"
          y2="35"
          stroke="#365F2E"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>

      <div className={styles.peopleGrid}>
        <div className={styles.peopleCard}>
          <Image
            src="/village/hai_dang.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Dang dep trai"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>TRAN HAI DANG</h2>
            <div className={styles.peopleRole}>
              <p>President</p>
              <p>Director of Product Development</p>
            </div>
            <p className={styles.peopleQuote}>"Creativity with Impact"</p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/le_ngoc_linh.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Ngoc Linh"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>LE NGOC LINH</h2>
            <div className={styles.peopleRole}>
              <p>Vice-President</p>
              <p>Manager of Product Development</p>
              <p>Director of Partnership</p>
            </div>
            <p className={styles.peopleQuote}>
              “Every corner in Vietnam deserves its spotlight (and tourists
              deserve the adventure).”
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/nhat_anh.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Nhat Anh"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>VIET NHAT ANH</h2>
            <div className={styles.peopleRole}>
              <p>Manager of Human Growth</p>
              <p>Associate of Product Development</p>
              <p>Associate of Partnership</p>
            </div>
            <p className={styles.peopleQuote}>
              "Just like my passion for culinary arts, where I discovered the
              beauty of culture through each dish, the À Ơi project is my way of
              breathing life into those traditional values, ensuring they endure
              through time."
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/uyen_khanh.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Uyen Khanh"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>DANG QUANG UYEN KHANH</h2>
            <div className={styles.peopleRole}>
              <p>Director of Brand Development</p>
              <p>Associate of Product Development</p>
              <p>Associate of Partnership</p>
            </div>
            <p className={styles.peopleQuote}>
              "Every small action can contribute to preserving and spreading
              sustainable values, and À Ơi is where I choose to place my trust
              in that belief. I hope that À Ơi will bring a fresh image of
              Vietnam to the world."
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/ha_thuong.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Ha Thuong"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>TRAN THI HA THUONG</h2>
            <div className={styles.peopleRole}>
              <p>Designer of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              "Every small action can contribute to preserving and spreading
              sustainable values, and À Ơi is where I choose to place my trust
              in that belief. I hope that À Ơi will bring a fresh image of
              Vietnam to the world."
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/thuy_duong.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Thuy Duong"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>NGUYEN THUY DUONG</h2>
            <div className={styles.peopleRole}>
              <p>Associate of Human Growth</p>
              <p>Content Creator of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              “In this digital age, many fear that culture may fade, but at À
              Ơi, we remain committed to the enduring beauty of Vietnamese
              heritage. I hope À Ơi will inspire confidence, pride, and a sense
              of cultural pride as we work together to preserve and share the
              beauty of our homeland.”
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/phuong_anh.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Phuong Anh"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>DANG DO PHUONG ANH</h2>
            <div className={styles.peopleRole}>
              <p>Visual Manager of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              “Throughout my journey to reconnect with my roots, I was deeply
              focused on preserving the essence of old traditions. Luckily, I
              found my companions at À Ơi. In a society where the beauty of the
              past is fading, À Ơi serves as a bamboo bridge linking the present
              and the past, fostering cultural values that endure across
              generations.”
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/cat_tuong.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Cat Tuong"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>NGUYEN TONG CAT TUONG</h2>
            <div className={styles.peopleRole}>
              <p>Designer of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              “À Ơi is not just a project; it is a heartfelt journey to preserve
              and promote the cultural values of Vietnam. In this era of change,
              where traditions may fade in the eyes of the younger generation, À
              Ơi serves as a bridge connecting the present to the past,
              breathing life into timeless values.”
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/hien_luong.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Hien Luong"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>NGUYEN THI HIEN LUONG</h2>
            <div className={styles.peopleRole}>
              <p>Design Manager of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              “The era of innovation calls for new approaches to developing and
              promoting culture and the arts. While this will undoubtedly be a
              challenging journey for À Ơi, we must try to know what’s
              possible.”
            </p>
          </div>
        </div>
        <div className={styles.peopleCard}>
          <Image
            src="/village/thao_linh.jpg"
            width={420}
            height={600}
            className={styles.peopleImg}
            alt="Thao Linh"
          />
          <div className={styles.peopleInfo}>
            <h2 className={styles.peopleName}>NGUYEN THAO LINH</h2>
            <div className={styles.peopleRole}>
              <p>Content Creator of Brand Development</p>
            </div>
            <p className={styles.peopleQuote}>
              “As artist Tự Long once said, "The value of tradition lies in
              connection. Don’t say today’s youth don’t love tradition or their
              country—they do, passionately, though their expressions differ
              from the past. They embrace global influences while showcasing
              Vietnam’s beauty to the world." I believe À Ơi embodies this
              spirit, created by talented, creative youth to inspire and
              preserve our cultural heritage.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
