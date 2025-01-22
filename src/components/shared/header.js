"use client";
import Menu from "./menu";
import styles from "./header.module.css";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@public/header/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.menubutton} onClick={() => setMenuOpen(true)}>
        <svg
          width="59"
          height="39"
          viewBox="0 0 59 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M55.364 20.5392H0.263184" stroke="white" strokeWidth="4" />
          <path
            d="M34.3733 1.89478L55.3641 20.539L34.3733 37.2208"
            stroke="white"
            strokeWidth="4"
          />
        </svg>
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}
