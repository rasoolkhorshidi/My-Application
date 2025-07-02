import { useEffect, useState } from "react";
import CartItem from "../../Components/cartItem/CartItem";
import { useShopingCartContext } from "../../context/ShopingCartContext";
import { getAllProducts } from "../../services/api";
import type { TProduct } from "../../types/servers";

function Cart() {
  const { cartItems } = useShopingCartContext();
  const [products, setProducts] = useState<Record<number, TProduct>>({});

  useEffect(() => {
    // Fetch all products in cart
    Promise.all(
      cartItems.map((item) =>
        getAllProducts(item.id.toString()).then((p) => [item.id, p])
      )
    ).then((results) => {
      setProducts(Object.fromEntries(results));
    });
  }, [cartItems]);

  // Calculate totals
  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + (products[item.id]?.price || 0) * item.qty,
    0
  );
  const totalDiscount = cartItems.reduce(
    (sum, item) =>
      sum +
      ((products[item.id]?.price || 0) *
        (products[item.id]?.discount || 0) *
        item.qty) /
        100,
    0
  );
  const totalAfterDiscount = totalPrice - totalDiscount;

  return (
    <div className="p-4 max-w-200 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-100">
        <h2 className="text-xl font-semibold">Total Items: {totalItems}</h2>
        <h2 className="text-xl font-semibold">
          Total Discount: ${totalDiscount.toFixed(2)}
        </h2>
        <h2 className="text-xl font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-200">
        <h2 className="text-xl font-semibold">
          Total Price after Discount: ${totalAfterDiscount.toFixed(2)}
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