import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";


const Products = () => {
  const products = useLoaderData();
  const productss = Array.from(Object.values(products))
  const finalProduct = productss[0]
  
//   const { id, title, price, images } = products;
  return (
    <div className="grid grid-cols-3 mx-10 mt-4">
      
      {
        console.log(finalProduct)
      }
       {finalProduct.map(product => <Product key={product.id} product={product}></Product>)}
        

    </div>
  );
};

export default Products;
