import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Store from "./Pages/store/store";
import Navbar from "./Components/navbar/Navbar";
import Product from "./Pages/product/product";
import Cart from "./Pages/cart/cart";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
