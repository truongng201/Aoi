import styles from "./village.module.css";
import Footer from "@/components/shared/footer";
import Intro from "@/components/our-village/intro";
import Values from "@/components/our-village/values";
import People from "@/components/our-village/people";
import Header from "@/components/shared/header";

export default function OurVillage() {
  return (
    <>
      <Header />
      <Intro />
      <Values />
      <People />
      <Footer />
    </>
  );
}
