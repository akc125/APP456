"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { Suspense, useState } from 'react'
import styles from '../../page.module.css'
import GotoCartButton from '../GotoCartButton'
import { Span } from 'next/dist/trace'
import { Metadata } from 'next'
//import { useCart } from "../../context/CartContext";



export default function ProductCard(props:any) {
  // const { addToCart } = useCart();


 
    var prod = props.product
    const [selectprod,setSelectProd]= useState({})

    const sProd =()=>{
        console.log('selectprod', prod);
        setSelectProd(prod);
    }
    const router = useRouter()
      return (
        <div className={styles.card}>
           
      <div  key={prod.id}><Suspense fallback={<span style={{background:'blue'}}>loding.......</span>}>
        <img src={prod.image} width={50}  className={styles.card_img}/></Suspense>
       <div  className={styles.card_content}>
       <div className={styles.card_title}>{prod.title}</div>
       <div  className={styles.card_price}>{prod.price}</div>
       </div>
        <div>{prod.description}</div>
        <div>{prod.category}</div>
        <div>{prod.rating.rate}</div>
        <div>{prod.rating.count}</div>
        <div style={{display:'flex',justifyContent:'center'}}> <button   className={styles.addToCart} onClick={()=>{router.push(`/products/${prod.id}`)}}>detils</button>
        {/* <button className={styles.addToCart} onClick={() => addToCart(prod)}>
            Add to Cart
          </button> */}
          <GotoCartButton product={prod}/>
        </div>
    </div>


        </div>
      )
}
