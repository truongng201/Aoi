import styles from "./firstblock.module.css";

export default function FirstBlock() {
  return (
    <div className={styles.firstblock}>
      <div className={styles.title}>Our Work</div>
      <div className={styles.description}>
        With bold ideas and creativity, we embrace Vietnam’s rich <br /> culture
        to craft meaningful stories. We strive to deliver the <br /> best in
        every project and bring our clients' vision to life.
      </div>
      <div className={styles.vector1}>
        <svg
          width="318"
          height="1360"
          viewBox="0 0 318 1360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.7286 0H-243.503L-544 1359.65H-357.09L-279.436 1004.16L-226.247 763.314L-112.659 252.503L-0.527954 763.314L52.6615 1004.16L130.316 1359.65H317.226L16.7286 0Z"
            fill="#FFBF4D"
            fillOpacity="0.43"
          />
        </svg>
      </div>
      <div className={styles.vector2}>
        <svg
          width="329"
          height="278"
          viewBox="0 0 329 278"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M328.038 138.405L-495.435 0.743408L-508.177 139.783L313.512 277.69L328.038 138.405Z"
            fill="#FFBF4D"
            fillOpacity="0.43"
          />
        </svg>
      </div>
      <div className={styles.specialvector}>
        <div className={styles.vector3}>
          <svg
            width="862"
            height="1360"
            viewBox="0 0 862 1360"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M560.827 1359.65H300.596L0.0986328 0H187.008L264.663 355.442L317.852 596.29L431.44 1107.15L543.571 596.29L596.797 355.442L674.415 0H861.324L560.827 1359.65Z"
              fill="#FFBF4D"
              fillOpacity="0.43"
            />
          </svg>
        </div>
        <div className={styles.vector4}>
          <svg
            width="837"
            height="278"
            viewBox="0 0 837 278"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M836.44 138.625L12.9678 0.962524L0.225586 140.051L821.914 277.91L836.44 138.625Z"
              fill="#FFBF4D"
              fillOpacity="0.43"
            />
          </svg>
        </div>
      </div>

      <div className={styles.vector5}>
        <svg
          width="333"
          height="1360"
          viewBox="0 0 333 1360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M561.089 0H300.821L0.324219 1359.65H187.234L264.888 1004.16L318.078 763.314L431.665 252.503L543.833 763.314L597.022 1004.16L674.677 1359.65H861.586L561.089 0Z"
            fill="#FFBF4D"
            fillOpacity="0.43"
          />
        </svg>
      </div>
      <div className={styles.vector6}>
        <svg
          width="297"
          height="278"
          viewBox="0 0 297 278"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M836.363 138.405L12.9272 0.743408L0.185059 139.783L821.873 277.69L836.363 138.405Z"
            fill="#FFBF4D"
            fillOpacity="0.43"
          />
        </svg>
      </div>
    </div>
  );
}
