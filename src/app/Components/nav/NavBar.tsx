import Link from "next/link";

import React from "react";
import styles from "../../page.module.css";



export default function NavBar() {
  return (
    <div className={styles.navbar}>
     <div > N-app</div>
     <div className={styles.navbar_content}><Link className="nav-link active" aria-current="page" href="/">
        Home
      </Link></div>
     <div className={styles.navbar_content}> <Link className="nav-link" href="Products">
        products{" "}
      </Link></div>
      <div className={styles.navbar_content}><input type="text"className={styles.text} /></div>
     <div className={styles.navbar_content}> <Link href={"about-us"} className="nav-link">
        Aboutus
      </Link></div>
      <div className={styles.navbar_content}> <Link href={"ContactUs"} className="nav-link">
      contactus
      </Link></div>
      <div className={styles.navbar_content}> <Link href={'/carts'} className="nav-link">
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2C8_5zVY5_5fuE6hkoo9wjPpbBoy8b_4xg&s" alt=""  style={{width:'30px'}}/>
      </Link></div>
    

      
     
     
    </div>
  );
}
