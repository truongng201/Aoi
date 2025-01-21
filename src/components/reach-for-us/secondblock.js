import styles from "./secondblock.module.css";
import Image from "next/image";
import image2 from "@public/reach-for-us/image2.png";
import image3 from "@public/reach-for-us/image3.png";

export default function SecondBlock() {
  return (
    <div className={styles.secondblock}>
      <div className={styles.content}>
        <div className={styles.secondImage}>
            <Image alt="image2" src={image2} />
        </div>
        <div className={styles.leftblock}>
          <div className={styles.subleftblock}>
            <div className={styles.title}>CONTACT INFORMATION</div>
            <div className={styles.section1}>
              <div className={styles.head}>EMAIL</div>
              <div className={styles.body}>trhaidang2202@gmail.com</div>
            </div>
            <div className={styles.section2}>
              <div className={styles.head}>HOTLINE</div>
              <div className={styles.body}>0866899176</div>
            </div>
            <div className={styles.section3}>
              <div className={styles.head}>ON SOCIAL</div>
              <div className={styles.icon}>
                <svg
                  width="41"
                  height="41"
                  viewBox="0 0 41 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.4906 20.4087C40.4906 9.1361 31.4277 0 20.2453 0C9.06294 0 0 9.1361 0 20.4087C0 29.9753 6.54019 38.0113 15.358 40.2195V26.643H11.1824V20.4087H15.358V17.7221C15.358 10.7784 18.4739 7.55761 25.2434 7.55761C26.5245 7.55761 28.7389 7.81272 29.6483 8.06783V13.7121C29.1738 13.6643 28.3434 13.6324 27.3075 13.6324C23.986 13.6324 22.7048 14.9 22.7048 18.1925V20.4087H29.3162L28.1774 26.643H22.6969V40.666C32.7247 39.4462 40.4906 30.8443 40.4906 20.4087Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="46"
                  height="31"
                  viewBox="0 0 46 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9255 5.03176C44.3971 3.16546 42.8452 1.70077 40.8739 1.20466C37.3003 0.299072 22.9727 0.299072 22.9727 0.299072C22.9727 0.299072 8.64498 0.299072 5.07145 1.20466C3.10014 1.70077 1.54825 3.16546 1.01977 5.03176C0.0634766 8.41 0.0634766 15.45 0.0634766 15.45C0.0634766 15.45 0.0634766 22.49 1.01977 25.8682C1.54825 27.7345 3.10014 29.1362 5.07145 29.6323C8.64498 30.5379 22.9727 30.5379 22.9727 30.5379C22.9727 30.5379 37.3003 30.5379 40.8739 29.6323C42.8452 29.1362 44.3971 27.7266 44.9255 25.8682C45.8818 22.49 45.8818 15.45 45.8818 15.45C45.8818 15.45 45.8818 8.41 44.9255 5.03176ZM18.2918 21.8442V9.05573L30.2623 15.45L18.2918 21.8442Z"
                    fill="white"
                  />
                </svg>
                <svg
                  width="39"
                  height="41"
                  viewBox="0 0 39 41"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.8146 16.6747C35.0472 16.6827 31.3653 15.5864 28.3 13.5527V27.7568C28.3 34.8906 22.0666 40.6739 14.369 40.666C6.67994 40.666 0.455078 34.8827 0.455078 27.7488C0.455078 20.615 6.6885 14.8317 14.3861 14.8396C15.0283 14.8396 15.6619 14.8793 16.2955 14.9667V22.1085C12.9305 21.1234 9.34285 22.8632 8.28111 25.9852C7.21937 29.1073 9.09454 32.4359 12.4596 33.4209C15.8246 34.406 19.4122 32.6662 20.474 29.5442C20.6709 28.9722 20.7651 28.3685 20.7651 27.7647V0H28.3C28.3 0.587865 28.3514 1.18367 28.4627 1.7636C28.9936 4.38516 30.6632 6.68895 33.0778 8.13479C34.7817 9.17547 36.7768 9.73155 38.8146 9.73155V16.6747Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
            <div className={styles.section4}>
              <div className={styles.head}>BY FORM</div>
              <div className={styles.body}>
                <p>
                  Use the contact form to send me a message.
                  <br />
                  We'll get back to you within 24 business hours.
                </p>
              </div>
            </div>
            <div className={styles.thirdImage}>
                <Image alt="image3" src={image3} />
            </div>
            <div className={styles.forthImage}>
                <Image alt="image4" src={image3} />
            </div>
          </div>
        </div>
        {/* <div className={styles.rightblock}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
          <textarea
            placeholder="LEAVE YOUR REQUEST"
            className={styles.textarea}
          ></textarea>
          <div>
            <p>Send your request</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
