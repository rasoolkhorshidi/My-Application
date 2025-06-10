import ProductItem from "../../Components/productItem/ProductItem";


function Store() {
  return <div>
    <h1 className="mt-5">Newest Product</h1>

  <div className="grid grid-cols-4 gap-4 mt-5">
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  <ProductItem />
  </div>

  </div>;
}

export default Store;
