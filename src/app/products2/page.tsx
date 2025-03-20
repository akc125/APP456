import React from 'react'
import ProductCard from '../Components/ProductCard.tsx/ProductCard'
import { productServices } from '../Services/services'
import GotoCartButton from '../Components/GotoCartButton'
import styles from '../page.module.css'
import Footer from '../Components/Footer/Footer'
import { Metadata } from 'next'

// async function getAllProducts(){
   
// }
const mystyle={
  background:'black',
  color:'white',
  margin :0}
  
export const metadata : Metadata={
  title:"Product detail page"
}

export default async function ProductSearch() {
    console.log('fetch the products ')
    var products = await productServices.getproduct()
  return (
    <div style={{backgroundColor:'black'}}>
      {/* <GotoCartButton/> */}
       <h1 style={mystyle} id='product'>products details</h1>
        <div className={styles.cardstyle}>
            {
                products.map((p:any)=>{
                  
                  return <ProductCard key={p.id} product={p}/> 
                })
            }
        </div>
        <Footer/>
    </div>
  )
}
