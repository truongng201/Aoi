import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.vectorAfirst}>
        <svg
          width="370"
          height="432"
          viewBox="0 0 370 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240.68 0H128.981L0 431.996H80.2266L113.558 319.047L136.388 242.524L185.143 80.2266L233.273 242.524L256.103 319.047L289.435 431.996H369.661L240.68 0Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorAfirstLine}>
        <svg
          width="360"
          height="89"
          viewBox="0 0 360 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M359.302 44.4525L5.84575 0.713867L0.376465 44.8901L353.067 88.7069L359.302 44.4525Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorVsecondary}>
        <svg
          width="371"
          height="432"
          viewBox="0 0 371 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.74"
            d="M241.055 431.996H129.357L0.375122 0H80.6018L113.933 112.933L136.763 189.456L185.518 351.769L233.648 189.456L256.494 112.933L289.81 0H370.036L241.055 431.996Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorVfirst}>
        <svg
          width="370"
          height="432"
          viewBox="0 0 370 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240.716 431.996H129.018L0.036377 0H80.263L113.594 112.933L136.425 189.456L185.18 351.769L233.309 189.456L256.155 112.933L289.471 0H369.698L240.716 431.996Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorVfirstLine}>
        <svg
          width="360"
          height="89"
          viewBox="0 0 360 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M359.587 44.0272L6.13054 0.288574L0.661255 44.4804L353.352 88.2816L359.587 44.0272Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorAsecondary}>
        <svg
          width="371"
          height="432"
          viewBox="0 0 371 432"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M241.393 0H129.679L0.697571 431.996H80.9242L114.256 319.047L137.086 242.524L185.841 80.2266L233.986 242.524L256.816 319.047L290.148 431.996H370.374L241.393 0Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorAsecondaryLine}>
        <svg
          width="359"
          height="89"
          viewBox="0 0 359 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M359 44.4525L5.55901 0.713867L0.0897217 44.8901L352.781 88.7069L359 44.4525Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.vectorVsecondaryLine}>
        <svg
          width="359"
          height="89"
          viewBox="0 0 359 89"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.74"
            d="M358.926 44.0272L5.46929 0.288574L0 44.4804L352.691 88.2816L358.926 44.0272Z"
            fill="#F3E0C7"
            fillOpacity="0.52"
          />
        </svg>
      </div>
      <div className={styles.newsletter}>
        <h3>Join our newsletter</h3>
        <p>Leave us with your email to get updates from the studio</p>
      </div>
      <div className={styles.visit}>
        <h3>Visit Us</h3>
        <p>Khu đô thị Vinhomes Ocean Park, Gia Lâm, Hà Nội</p>
      </div>
      {/* <div className={styles.contact}>
        <h3>Contact Us</h3>
        <p>trhaidang2202@gmail.com</p>
        <p>0866899176</p>
        <div className={styles.socialicons}>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-tiktok"></i>
        </div>
      </div>
      <div className={styles.footerbottom}>
        <p>
          À Ơi Limited. <a href="#">Privacy Policy</a>
        </p>
      </div> */}
    </div>
  );
}
