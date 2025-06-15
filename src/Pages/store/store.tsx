import { useEffect, useState } from "react";
import ProductItem from "../../Components/productItem/ProductItem";
import { getAllProducts } from "../../services/api";
import type { TProduct } from "../../types/servers";

function Store() {
  const [getedProduct, setGetedProduct] = useState<TProduct[]>([]);
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
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Store;
