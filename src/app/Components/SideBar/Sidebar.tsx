"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../../page.module.css";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>(""); // Track active section

  const handleClick = (section: string) => {
    setActiveSection(section); // Set active section on click
  };

  return (
    <div className={styles.div25}>
      <Link
        href="#product"
        onClick={() => handleClick("product")}
        className={`${styles.pord_ditils} ${activeSection === "product" ? styles.active : ""}`}
      >
        Products
      </Link>
      <Link
        href="#footer"
        onClick={() => handleClick("")}
        className={`${styles.pord_ditils} ${activeSection === "categories" ? styles.active : ""}`}
      >
        go to down
      </Link>
      <Link
        href="/"
        onClick={() => handleClick("")}
        className={`${styles.pord_ditils} ${activeSection === "about-us" ? styles.active : ""}`}
      >
        back to home 
      </Link>
    </div>
  );
}
