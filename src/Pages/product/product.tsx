import { useParams } from "react-router-dom";
import Container from "../../Components/container/Container";
import Button from "../../Components/button/Button";
import { getAllProducts } from "../../services/api";
import { useState, useEffect } from "react";
import type { TProduct } from "../../types/servers";
import { useShopingCartContext } from "../../context/ShopingCartContext";

function Product() {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    getProductQty,
    handleRemoveProduct,
  } = useShopingCartContext();
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
  return (
    <div>
      <Container>
        <div className="shadow-lg rounded-lg overflow-hidden mt-4 grid grid-cols-12 ">
          <div className="col-span-3 p-4">
            <img className="rounded" src={getedProduct.image} alt="" />

            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleIncreaseProductQty(parseInt(params.id as string));
                  }}
                >
                  Add To Cart
                </Button>
              </>
            ) : (
              <>
                <div className="grid grid-cols-3">
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDecreaseProductQty(parseInt(params.id as string));
                    }}
                  >
                    -
                  </Button>
                  <span className="flex justify-center items-center pt-2.5">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleIncreaseProductQty(parseInt(params.id as string));
                    }}
                  >
                    +
                  </Button>
                </div>
                <Button
                  variant="danger"
                  onClick={() =>
                    handleRemoveProduct(parseInt(params.id as string))
                  }
                >
                  Remove
                </Button>
              </>
            )}
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
              <p>Description: {getedProduct.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
