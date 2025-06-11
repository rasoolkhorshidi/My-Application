//create a component with CartItem named CartItem that takes in a product and a quantity as props and displays the product name, price, and quantity. Also, add a button to remove the item from the cart.
import type { ComponentProps } from "react";

type TCartItem = ComponentProps<"div">;
function CartItem({ ...rest }: TCartItem) {
  return (
    <div {...rest} className="flex items-center justify-between p-4 ">
      <div className="grid grid-cols-12 gap-4 border-b border-gray-300 shadow w-full max-w-180 mx-auto py-2">
        <div className="col-span-3 flex justify-center items-center">
          <img
            className="rounded shadow-lg w-24 h-24 object-cover"
            src="https://cashflowinventory.com/blog/wp-content/uploads/2023/09/Product-Assortment-1024x1024.jpg"
          />
        </div>
        <div className="col-span-7 flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Title</h2>
          <p className="text-gray-600">Price: 55$</p>
          <p className="text-gray-500">
            Quantity:
            <button className="bg-red-600 w-4 mx-2 cursor-pointer text-white">
              -
            </button>
            2
            <button className="bg-green-600 w-4 mx-2 cursor-pointer text-white">
              +
            </button>{" "}
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center p-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
