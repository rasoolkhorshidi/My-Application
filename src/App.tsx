import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Store from "./Pages/store/store";
import Navbar from "./Components/navbar/Navbar";
import Product from "./Pages/product/product";
import Cart from "./Pages/cart/cart";
import { ShopingCartProvider } from "./context/ShopingCartContext";

function App() {
  return (
    <ShopingCartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
   </ShopingCartProvider>
  );
}

export default App;
