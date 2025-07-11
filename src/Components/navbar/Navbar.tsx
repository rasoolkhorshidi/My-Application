import { Link } from "react-router-dom";
import Container from "../container/Container";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useShopingCartContext } from "../../context/ShopingCartContext";
function Navbar() {
  const { cartQty } = useShopingCartContext();
  const isLogin = localStorage.getItem("isLogin") === "true";

  const handleAuthClick = () => {
    localStorage.setItem("isLogin", "false");
    if (isLogin) {
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <div className="h-8 border-b-gray-400 shadow">
      <Container>
        <div className="text-lg font-bold">My Application</div>
        <nav>
          <ul className="flex space-x-4" dir="rtl">
            <li>
              <Link to="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/store" className="text-gray-700 hover:text-blue-500">
                Store
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-700 hover:text-blue-500 relative mr-2"
              >
                {isLogin && cartQty > 0 && (
                  <span className="flex items-center text-xs text-white justify-center absolute w-4 h-4 -bottom-1 right-2.5 bg-red-500 rounded-full">
                    {cartQty}
                  </span>
                )}
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
            </li>
            <li>
              <button
                onClick={handleAuthClick}
                className="text-gray-700 hover:text-blue-500 mr-4"
              >
                {isLogin ? "Logout" : "Login"}
              </button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
