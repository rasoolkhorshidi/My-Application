import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home/home";
import Store from "./Pages/store/store";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
  <>
  <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
    </Routes>
  </>
  );
}

export default App;
