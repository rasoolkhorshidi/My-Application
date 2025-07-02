import { useEffect, useState } from "react";
import {
  useShopingCartContext,
  type ICartItem,
} from "../../context/ShopingCartContext";
import { getAllProducts } from "../../services/api";
import type { TProduct } from "../../types/servers";

type TCartItem = ICartItem;

function CartItem({ id, qty }: TCartItem) {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShopingCartContext();

  const [getedProduct, setGetedProduct] = useState<TProduct>({} as TProduct);
  useEffect(() => {
    getAllProducts(id.toString())
      .then((products) => {
        setGetedProduct(products);
      })
      .catch((error) => {
        alert("Error fetching products:" + error);
      });
  }, []);
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="grid grid-cols-12 gap-4 border-b border-gray-300 shadow w-full max-w-180 mx-auto py-2">
        <div className="col-span-3 flex justify-center items-center">
          <img
            className="rounded shadow-lg w-24 h-24 object-cover"
            src={getedProduct.image}
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">{getedProduct.title}</h2>
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Price: </span>
            <span className="text-gray-500 line-through">
              ${getedProduct.price}
            </span>
            <span className="text-red-600 font-bold">
              $
              {Math.round(
                getedProduct.price -
                  (getedProduct.price * getedProduct.discount) / 100
              )}
            </span>
            <span className="ml-2 text-green-600 font-semibold bg-green-100 px-2 py-1 rounded text-xs">
              {getedProduct.discount}% OFF
            </span>
          </div>
          <p className="text-gray-500">
            Quantity:
            <button
              className="bg-red-600 w-4 mx-2 cursor-pointer text-white"
              onClick={() => handleDecreaseProductQty(id)}
            >
              -
            </button>
            {qty}
            <button
              className="bg-green-600 w-4 mx-2 cursor-pointer text-white"
              onClick={() => handleIncreaseProductQty(id)}
            >
              +
            </button>
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center p-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded"
            onClick={() => handleRemoveProduct(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
