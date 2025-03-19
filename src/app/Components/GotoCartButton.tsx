 "use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import styles from '../Products/[Products]/prod.module.css'
import { useCart } from "../context/CartContext";



export default function GotoCartButton({ product }: { product: any }) {
    const router = useRouter()
    const {cart, addToCart } = useCart();
      
  return (
    <div>
       <button className={styles.addToCart} onClick={() => addToCart(product)}>
            Add to Cart
            {cart.map((item) =>
          item.id === product.id ? ( // ✅ Only show quantity for this product
            <p key={item.id}>Quantity: {item.quantity}</p>
          ) : null
        )}
          </button>
          <div>
        
      </div>
      {/* <button onClick={()=>{router.push('/carts')}} className={styles.addToCart}>cart page </button> */}
       
    </div>
  )
// }
// function useCart(): { addToCart: any } {
//   throw new Error('Function not implemented.')
 }

 