import ProductItem from "../../Components/productItem/ProductItem";
import { Link } from "react-router-dom";

function Store() {
  return (
    <div>
      <h1 className="mt-5">Newest Product</h1>

      <div className="grid grid-cols-4 gap-4 mt-5">
        <Link to={`/product/${1}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${2}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${3}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${4}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${5}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${6}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${7}`}>
          <ProductItem />
        </Link>
        <Link to={`/product/${8}`}>
          <ProductItem />
        </Link>
      </div>
    </div>
  );
}

export default Store;
