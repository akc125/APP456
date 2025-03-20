"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";
import styles from "../products2/[productId]/prod.module.css";
import Image from "next/image";



export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className={styles.productDetail}>
      <h1 className={styles.main}>Shopping Cart</h1>

      {cart.length === 0 ? (
       <div> <p>Your cart is empty.</p>
       <button className={styles.addToCart}><Link className="nav-link active" aria-current="page" href="/">
           Home
         </Link></button></div>
      ) : (
        cart.map((item) => (
          <div key={item.id} className={styles.productCard}>
            <img  src={item.image}
              alt={item.title}
              width={150}
              height={150}
              className={styles.productImage}></img>
            <div className={styles.productInfo}>
              <h2 className={styles.productTitle}>{item.title}</h2>
              <p className={styles.productPrice}>${item.price}</p>

              {/* ✅ Show Quantity */}
              <p>Quantity : {item.quantity}</p>

              {/* ✅ Remove Item (Decrease Quantity) */}
              <button
                className={styles.addToCart}
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
