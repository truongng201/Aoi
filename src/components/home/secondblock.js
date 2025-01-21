import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@public/home/image1.png";
import image2 from "@public/home/image2.png";
import Link from "next/link";

export default function SecondBlock() {
  return (
    <div className={styles.secondBlock}>
      <div className={styles.content}>
        <div className={styles.firstContent}>
          We craft <span>stories and campaigns</span> <br /> celebrating the
          beauty of Vietnam's <br /> cultural heritage for brands, <br />{" "}
          organizations, and creative projects.
        </div>
        <div className={styles.firstImage}>
          <Image src={image1} alt="image1" />
        </div>
        <div className={styles.secondContent}>
          Vietnamese culture is a treasure <br /> of beauty and history,
          <br /> connecting people through <br /> shared heritage and inspiring{" "}
          <br /> pride. Celebrating these <br /> traditions preserves their{" "}
          <br /> essence and enriches the world <br /> with timeless values.
        </div>
        <Link href="/projects">
          <div className={styles.firstRoute}>
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.5225 4.17036C28.6327 2.98755 27.9032 1.95242 26.8932 1.85834L10.4342 0.325102C9.42419 0.231014 8.5161 1.1136 8.40592 2.29641C8.29573 3.47922 9.02518 4.51434 10.0352 4.60843L24.6654 5.97131L23.0694 23.1046C22.9592 24.2874 23.6887 25.3226 24.6987 25.4167C25.7087 25.5107 26.6168 24.6282 26.727 23.4454L28.5225 4.17036ZM3.15207 29.6348L27.8458 5.63485L25.5417 2.36515L0.847928 26.3652L3.15207 29.6348Z"
                fill="#FFBF4D"
              />
            </svg>

            <p>Our Projects</p>
          </div>
        </Link>

        <div className={styles.divider}></div>
        <div className={styles.thirdContent}>
          “I’d like to borrow the words of artist <br /> Tự Long when speaking
          about the <br /> younger generation and tradition:
          <br /> "The value of tradition lies in its ability
          <br /> to connect. Don’t say today’s youth
          <br /> don’t love tradition or their nation.
          <br /> They love it deeply, passionately. But
          <br /> their way of expressing it differs from
          <br /> the generations before. They’ve
          <br /> embraced the cultural essence of
          <br /> other nations while bringing the
          <br /> finest aspects of Vietnamese culture
          <br /> to the world" (NSND Tự Long).
          <br /> And I believe that À Ơi is a project
          <br /> created by talented and creative
          <br /> young individuals with the very
          <br /> purpose of inspiring others in the
          <br /> same way!”
        </div>
        <div className={styles.forthContent}>
          “Throughout my journey of
          <br /> reconnecting with my roots, I’ve been
          <br />
          tirelessly searching for a way to
          <br /> preserve the timeless values of the
          <br />
          past. Fortunately, I found my
          <br /> companions at À Ơi. In a society where
          <br /> the beauty and wisdom of earlier
          <br /> times are gradually fading, À Ơi serves
          <br /> as a bamboo bridge connecting the
          <br /> present and the past, creating
          <br /> enduring cultural values for
          <br /> generations to come.”
        </div>
        <div className={styles.secondImage}>
          <Image src={image2} alt="image2" />
        </div>
        <div className={styles.fifthContent}>
          Nguyen Thao Linh Content <br />
          Creator of Brand Development
        </div>
        <div className={styles.sixthContent}>
          Dang Do Phuong Anh <br />
          Visual Manager of Brand Development
        </div>
        <Link href="/our-village">
          <div className={styles.secondRoute}>
            <svg
              width="29"
              height="30"
              viewBox="0 0 29 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.8029 4.17169C28.9127 2.99423 28.178 1.96285 27.1618 1.86802L10.6017 0.322845C9.58554 0.228024 8.67267 1.10568 8.56281 2.28313C8.45294 3.46059 9.18768 4.49198 10.2039 4.5868L24.9239 5.96029L23.3325 23.0161C23.2226 24.1936 23.9574 25.225 24.9736 25.3198C25.9898 25.4146 26.9026 24.5369 27.0125 23.3595L28.8029 4.17169ZM3.16042 29.6289L28.1233 5.62894L25.8025 2.37107L0.839583 26.3711L3.16042 29.6289Z"
                fill="#FFBF4D"
              />
            </svg>
            <p>Our Team</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
