export class productServices{
    static getproduct= async()=>{
        var productsresp =await fetch('https://fakestoreapi.com/products')
        var prod = await productsresp.json()
        return(
            prod
        )
    }
    static getProductsByid = async (id:number)=>{
        var productresp =await fetch(`https://fakestoreapi.com/products/${id}`)
        var product = await productresp.json()
        return(
            product
        )
    }
    static getHomeProduct = async ()=>{
        var HomePord =await fetch(`https://fakestoreapi.com/products/8`)
        var product = await HomePord.json()
        return(
            product
        )
    }


}