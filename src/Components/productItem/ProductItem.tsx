import { Link } from "react-router-dom";
import Button from "../button/Button";

function ProductItem({ productId }: { productId: number }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img
        className="rounded-t"
        src="https://cashflowinventory.com/blog/wp-content/uploads/2023/09/Product-Assortment-1024x1024.jpg"
        alt=""
      />
      <div className="flex justify-between py-1 px-2">
        <h3>Product Title</h3>
        <div className="flex flex-col items-end">
          <span className="text-red-500 font-bold">$90</span>
          <span className="line-through text-gray-400 text-xs">$100.00</span>
          <span className="text-green-600 text-xs">10% OFF</span>
        </div>
      </div>
      <div className="px-2">
        <p className="text-gray-600 text-sm line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-2 px-2 pb-1 text-sm">
        <Link to={`/cart`}>
          <Button variant="primary">Add To Cart</Button>
        </Link>
        <Link to={`/product/${productId}`}>
          <Button variant="secondary">Veiw Details</Button>
        </Link>
      </div>
    </div>
  );
}

export default ProductItem;
