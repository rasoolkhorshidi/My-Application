import { Link } from "react-router-dom";
import Container from "../container/Container";
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
              <Link to="/buy" className="text-gray-700 hover:text-blue-500">
                Buy
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
}

export default Navbar;
