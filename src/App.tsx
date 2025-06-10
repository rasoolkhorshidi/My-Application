import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Store from "./Pages/store/store";
import Navbar from "./Components/navbar/Navbar";
import Product from "./Pages/product/product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
