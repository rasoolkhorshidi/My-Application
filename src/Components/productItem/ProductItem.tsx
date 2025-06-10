function ProductItem() {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">

      <img
        className="rounded-t"
        src="https://cashflowinventory.com/blog/wp-content/uploads/2023/09/Product-Assortment-1024x1024.jpg"
        alt=""
      />
      <div className="flex justify-between p-2">
        <h3>Product Title</h3>
        <span>55$</span>
      </div>
        <div className="p-2">
            <p className="text-gray-600 text-sm line-clamp-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
    </div>
  );
}

export default ProductItem;
