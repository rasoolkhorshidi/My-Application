import CartItem from "../../Components/cartItem/CartItem";
import { useShopingCartContext } from "../../context/ShopingCartContext";

function Cart() {
  const {cartItems} = useShopingCartContext();
  
  return (
    <div className="p-4 max-w-200 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">Total Items: 5</h2>
        <h2 className="text-xl font-semibold">Total Discount: $75</h2>
        <h2 className="text-xl font-semibold">Total Price: $100</h2>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <h2 className="text-xl font-semibold">
          Total Price after Discount: $90
        </h2>
        <button className="bg-red-600 text-white px-4 py-2 rounded">
          Clear Cart
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Continue Shopping
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
