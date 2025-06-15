import { Link } from "react-router-dom";
import type { TProduct } from "../../types/servers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

function ProductItem({ title, discount, id, image, price }: TProduct) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/product/${id}`}>
        <img className="rounded-t" src={image} alt="" />
      </Link>
      <div className="flex justify-between py-1 px-2">
        <div className="grid grid-rows-2">
          <div>
            <Link to={`/product/${id}`}>
              <h3>{title}</h3>
            </Link>
          </div>
          <div className="flex gap-4 items-center justify-start">
            <Link to={`/cart`}>
              <button className="p-2 bg-blue-500 text-white rounded">
                <FontAwesomeIcon icon={faCartPlus} />
              </button>
            </Link>
            <Link to={`/product/${id}`}>
              <button className="p-2 bg-gray-500 text-white rounded">
                <FontAwesomeIcon icon={faInfoCircle} />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-red-500 font-bold">
            ${Math.round((price * (100 - discount)) / 100)}
          </span>
          <span className="line-through text-gray-400 text-xs">${price}</span>
          <span className="text-green-600 text-xs">{discount}% OFF</span>
        </div>
      </div>
      {/* <div className="px-2">
        <p className="text-gray-600 text-sm line-clamp-1">{description}</p>
      </div> */}
    </div>
  );
}

export default ProductItem;
