import styles from "./secondblock.module.css";
import Image from "next/image";
import image1 from "@public/our-story/image1.png";
import image2 from "@public/our-story/image2.png";
import image3 from "@public/our-story/image3.png";
import image4 from "@public/our-story/image4.png";
import image5 from "@public/our-story/image5.png";
import image6 from "@public/our-story/image6.png";
import image7 from "@public/our-story/image7.png";

export default function SecondBlock() {
  return (
    <div className={styles.secondblock}>
      <div className={styles.content}>
        <div className={styles.title}>THE STORY OF À ƠI</div>
        <div className={styles.description1}>
          At À Ơi, we believe in the enduring <br /> power of culture to
          inspire, connect, <br /> and define who we are.
        </div>
        <div className={styles.description2}>
          Our story began with a deep love for Vietnamese <br /> heritage,
          nurtured by the melodies of our mother’s <br /> lullabies, the wisdom
          of our father’s teachings, and <br /> the folk songs that echoed
          through our village.
        </div>
        <div className={styles.description3}>
          These timeless traditions naturally became an <br /> inseparable part
          of our lives, shaping not only our <br /> <strong>identities</strong>{" "}
          but also a <strong>profound commitment</strong> <br />
          to preserving and sharing Vietnam’s rich cultural tapestry.
        </div>
      </div>
      <div className={styles.leftImage}>
        <Image src={image1} alt="leftImage" />
      </div>
      <div className={styles.rightImage}>
        <Image src={image1} alt="rightImage" />
      </div>
      <div className={styles.dividerContainer}>
        <div className={styles.divider} />
      </div>
      <div className={styles.description4}>
        <p>
          From this shared passion, we—young <br />
          creatives bound by a love for tradition— <br />
          decided to create <span>À Ơi</span> , a space where the <br /> beauty
          of <span>Vietnamese culture</span> could <br /> shine. 
        </p>
      </div>
      <div className={styles.journey}>
        <div className={styles.image2}>
          <Image src={image2} alt="image2" />
        </div>
        <div className={styles.description1}>
          <p>
            Born not from grand strategies but from <br /> simple yet heartfelt
            conversations about folk <br /> melodies, handicrafts, and untold
            stories of <br /> our homeland, À Ơi emerged as a bridge <br />{" "}
            between the past and the future.
          </p>
        </div>
        <div className={styles.graphic1}>
          <svg
            width="342"
            height="274"
            viewBox="0 0 342 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 13C119.85 16.3401 332.63 70.6162 328.953 261"
              stroke="url(#paint0_linear_552_244)"
              strokeWidth="25"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_552_244"
                x1="171"
                y1="13"
                x2="171"
                y2="261"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A51F23" />
                <stop offset="1" stopColor="#A51F23" stopOpacity="0.12" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.graphic2}>
          <svg
            width="35"
            height="30"
            viewBox="0 0 35 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 0L21.429 11.4012H34.1435L23.8572 18.4476L27.7862 29.8488L17.5 22.8024L7.21376 29.8488L11.1428 18.4476L0.85651 11.4012H13.571L17.5 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.graphic3}>
          <svg
            width="51"
            height="46"
            viewBox="0 0 51 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 0L31.4496 17.2746H50.703L35.1267 27.9508L41.0763 45.2254L25.5 34.5491L9.92369 45.2254L15.8733 27.9508L0.297003 17.2746H19.5504L25.5 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.image3}>
          <Image src={image3} alt="image3" />
        </div>
        <div className={styles.description2}>
          <p>
            Our mission is to reconnect people, <br /> especially younger
            generations, with the soul <br /> of Vietnamese culture. Every story
            we tell, <br /> every project we create, and every <br /> connection
            we foster is a step toward <br />
            revitalizing the values that define us as a <br />
            people.
          </p>
        </div>
        <div className={styles.graphic4}>
          <svg
            width="645"
            height="421"
            viewBox="0 0 645 421"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M632 13.032C519.988 12.3232 267.736 23.1321 154.828 72.0379C13.6922 133.17 -103.145 292.646 221.518 408"
              stroke="url(#paint0_linear_552_249)"
              strokeWidth="25"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_552_249"
                x1="322.5"
                y1="13"
                x2="322.5"
                y2="408"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A51F23" />
                <stop offset="1" stopColor="#A51F23" stopOpacity="0.12" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.graphic5}>
          <svg
            width="51"
            height="46"
            viewBox="0 0 51 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 0L31.4496 17.2746H50.703L35.1267 27.9508L41.0763 45.2254L25.5 34.5491L9.92369 45.2254L15.8733 27.9508L0.297003 17.2746H19.5504L25.5 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.graphic6}>
          <svg
            width="35"
            height="30"
            viewBox="0 0 35 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 0L21.429 11.4012H34.1435L23.8572 18.4476L27.7862 29.8488L17.5 22.8024L7.21376 29.8488L11.1428 18.4476L0.85651 11.4012H13.571L17.5 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.image4}>
          <Image src={image4} alt="image4" />
        </div>
        <div className={styles.description3}>
          <p>
            Through innovative communication <br /> strategies, collaborative
            projects with local <br /> communities, and creative storytelling,
            we <br /> strive to make cultural treasures accessible, <br />{" "}
            engaging, and alive in today’s world. 
          </p>
        </div>
        <div className={styles.graphic7}>
          <svg
            width="604"
            height="587"
            viewBox="0 0 604 587"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 36.9979C241 -24.5 588.425 38.4631 591 147.998C595.11 322.847 259.859 92.8863 317.5 251.498C375.788 411.89 338.821 431.515 202 403.998C76.3529 378.728 86.8333 512.331 109 573.997"
              stroke="url(#paint0_linear_552_250)"
              strokeWidth="25"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear_552_250"
                x1="301.769"
                y1="12.8711"
                x2="301.769"
                y2="573.997"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#A51F23" />
                <stop offset="1" stopColor="#A51F23" stopOpacity="0.12" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.graphic8}>
          <svg
            width="51"
            height="46"
            viewBox="0 0 51 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 0L31.4496 17.2746H50.703L35.1267 27.9508L41.0763 45.2254L25.5 34.5491L9.92369 45.2254L15.8733 27.9508L0.297003 17.2746H19.5504L25.5 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.graphic9}>
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L24.4903 13.1287H39.0211L27.2654 21.2426L31.7557 34.3713L20 26.2574L8.2443 34.3713L12.7346 21.2426L0.97887 13.1287H15.5097L20 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.graphic10}>
          <svg
            width="40"
            height="35"
            viewBox="0 0 40 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 0L24.4903 13.1287H39.0211L27.2654 21.2426L31.7557 34.3713L20 26.2574L8.2443 34.3713L12.7346 21.2426L0.97887 13.1287H15.5097L20 0Z"
              fill="#FFBF4D"
            />
          </svg>
        </div>
        <div className={styles.image5}>
          <Image src={image5} alt="image5" />
        </div>
        <div className={styles.image6}>
          <Image src={image6} alt="image6" />
        </div>
      </div>
      <div className={styles.image7}>
        <Image src={image7} alt="image7" />
      </div>
      <div className={styles.image8}>
        <Image src={image7} alt="image8" />
      </div>
    </div>
  );
}
