import { useEffect, useState } from "react";
import ProductItem from "../../Components/productItem/ProductItem";
import { getAllProducts } from "../../services/api";

// Define a type for your product
type Product = {
  id: number; // or number, depending on your data
  // add other fields if needed
};

function Store() {
  const [getedProduct, setGetedProduct] = useState<Product[]>([]);
  useEffect(() => {
    getAllProducts()
      .then((products) => {
        setGetedProduct(products);
      })
      .catch((error) => {
        alert("Error fetching products:" + error);
      });
  }, []);
  return (
    <div>
      <h1 className="mt-5">Newest Product</h1>
      <div className="grid grid-cols-4 gap-4 mt-5 mx-3">
        {getedProduct.map((product) => (
          <ProductItem key={product.id} productId={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Store;