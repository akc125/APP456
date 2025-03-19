import Link from 'next/link'
import styles from '../page.module.css'

import { Metadata } from "next";
  
export const metadata : Metadata={
  title:"Contact Us"
}
export default function ContactUs(){
    return(
      <div className={styles.contact_container}>
      <h1 className={styles.contact_title}>Contact Us</h1>
      <p className={styles.contact_text}>Have questions? Reach out to us!</p>
      <form className={styles.contact_form}>
        <input type="text" placeholder="Your Name" className={styles.contact_input} />
        <input type="email" placeholder="Your Email" className={styles.contact_input} />
        <textarea placeholder="Your Message" className={styles.contact_textarea}></textarea>
        <button type="submit" className={styles.contact_button}>Send Message</button>
      </form>
     <button className={styles.addToCart}> <div className={styles.navbar_content}><Link className="nav-link active" aria-current="page" href="/">
        Home
      </Link></div></button>
    </div>

    )
}