import ProductItem from "../../Components/productItem/ProductItem";

function Store() {
  return (
    <div>
      <h1 className="mt-5">Newest Product</h1>

      <div className="grid grid-cols-4 gap-4 mt-5 mx-3">
        <ProductItem productId="1" />
        <ProductItem productId="2" />
        <ProductItem productId="3" />
        <ProductItem productId="4" />
        <ProductItem productId="5" />
        <ProductItem productId="6" />
        <ProductItem productId="7" />
        <ProductItem productId="8" />
        <ProductItem productId="9" />
        <ProductItem productId="10" />
      </div>
    </div>
  );
}

export default Store;
