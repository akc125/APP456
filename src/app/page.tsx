import Image from "next/image";
import styles from "./page.module.css";
import { productServices } from "./Services/services";
import Footer from "./Components/Footer/Footer";
import ProductSearch from "./products2/page";
//import ProductLayout from "./Products/layout";

export default async function Home() {
  var product = await productServices.getHomeProduct();

  return (
    <div className={styles.home} id="home">
      <div className={styles.home_page}>
        <div className={styles.div1}>
          {product ? (
            <div>
              <div>
                <img className={styles.product_image } src='https://png.pngtree.com/background/20230522/original/pngtree-couple-of-black-t-shirts-on-a-dark-background-picture-image_2685346.jpg' alt={product.title} />
              </div>
              <div className={styles.product_title }>{product.title}</div>
              
            </div>
          ) : (
            <p>Loading product...</p>
          )}
        </div>
        <ProductSearch/>
      </div>
      
      {/* <Footer/> */}
    </div>
  );
}
