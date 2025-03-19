import React from 'react'

import Link from "next/link";
import styles from "../../page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer_container} id='footer'>
    <div className={styles.footer_content}>
      <p className={styles.footer_text}>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      <nav className="footer-nav">
        <a href="/about-us" className={styles.footer_link}>About Us .</a>
        <a href="/ContactUs" className={styles.footer_link}>Contact Us .</a>
        <a href="/privacy" className={styles.footer_link}>Privacy Policy</a>
      </nav>
    </div>
  </footer>
  )
}
