import { title } from "process";
import GotoCartButton from "../../Components/GotoCartButton";
import { productServices } from "../../Services/services";
import styles from "../[productId]/prod.module.css";
import Image from "next/image";
import { Metadata } from "next";

type PageProps = {
  params: { Products: string };
};


export async function generateMetadata({ params }: PageProps) {
  console.log(params, 'metadata');

  const productId = Number(params.Products);
  let ProductDetails = null;

  if (!isNaN(productId)) {
    ProductDetails = await productServices.getProductsByid(productId);
  }

  return {
    title: ProductDetails ? ProductDetails.title : "Product Details",
  };
}


type ProductDetailsProps = {
  params: { Products: string };
};


 async function ProductPage({ params }: PageProps) {
  // const { Products } = params;
  const productId = Array.isArray(params.Products) ? params.Products[0] : params.Products;

  let ProductDetails = null;

  if (productId) {
    ProductDetails = await productServices.getProductsByid(Number(productId));
  }

  return (
    <div className={styles.productDetail}>
      <h1 className={styles.main}>Product Details</h1>
      {ProductDetails ? (
        <div className={styles.productCard}>
          {/* Product Image */}
        <img  src={ProductDetails.image}
            alt={ProductDetails.title}
            width={350}
            height={350}
            className={styles.productImage}></img>

          {/* Product Info */}
          <div className={styles.productInfo}>
            <h2 className={styles.productTitle}>{ProductDetails.title}</h2>
            <p className={styles.productDescription}>{ProductDetails.description}</p>
            <p className={styles.productPrice}>${ProductDetails.price}</p>

            {/* Add to Cart Button */}
            <GotoCartButton product={ProductDetails} /> 
          </div>
        </div>
      ) : (
        <p>No product found.</p>
      )}
    </div>
  );
}
export default ProductPage