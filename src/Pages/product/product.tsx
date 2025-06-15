import { useParams } from "react-router-dom";
import Container from "../../Components/container/Container";
import Button from "../../Components/button/Button";
import { getAllProducts } from "../../services/api";
import { useState, useEffect } from "react";
import type { TProduct } from "../../types/servers";

function Product() {
  const params = useParams<{ id: string }>();
  const [getedProduct, setGetedProduct] = useState<TProduct>({} as TProduct);
  useEffect(() => {
    getAllProducts(params.id as string)
      .then((products) => {
        setGetedProduct(products);
      })
      .catch((error) => {
        alert("Error fetching products:" + error);
      });
  }, []);
  console.log(getedProduct);
  return (
    <div>
      <Container>
        <div className="shadow-lg rounded-lg overflow-hidden mt-4 grid grid-cols-12 ">
          <div className="col-span-3 p-4">
            <img className="rounded" src={getedProduct.image} alt="" />
            <Button variant="primary">Add To Cart</Button>
            <Button variant="danger">Buy Now</Button>
          </div>
          <div className="col-span-9 p-4">
            <h1 className="text-2xl font-bold">{getedProduct.title}</h1>
            <div>
              <p>
                Price:&nbsp;
                <span className="text-gray-500 line-through mr-2">
                  ${getedProduct.price}
                </span>
                <span className="text-red-500 font-bold">
                  $
                  {Math.round(
                    (getedProduct.price * (100 - getedProduct.discount)) / 100
                  )}
                </span>
                <span className="ml-2 text-green-600 font-semibold bg-green-100 px-2 py-1 rounded text-xs">
                  {getedProduct.discount}% OFF
                </span>
              </p>
              <br />
              <p>
                Description: {getedProduct.description}

              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
