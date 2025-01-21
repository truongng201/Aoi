import styles from "./village.module.css";
import Footer from "@/components/footer";
import Intro from "@/components/our-village/intro";
import Values from "@/components/our-village/values";
import People from "@/components/our-village/people";

export default function OurVillage() {
  return (
    <>
      <Intro />
      <Values />
      <People />
      <Footer />
    </>
  );
}