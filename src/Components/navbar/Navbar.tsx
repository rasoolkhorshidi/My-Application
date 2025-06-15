import { Link } from "react-router-dom";
import Container from "../container/Container";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Navbar() {
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
              <Link to="/cart" className="text-gray-700 hover:text-blue-500">
                <FontAwesomeIcon icon={faCartPlus} />
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
