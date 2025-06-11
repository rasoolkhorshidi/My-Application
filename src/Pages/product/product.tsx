import { useParams } from "react-router-dom";
import Container from "../../Components/container/Container";
import Button from "../../Components/button/Button";

function Product() {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <Container>
        <div className="shadow-lg rounded-lg overflow-hidden mt-4 grid grid-cols-12 ">
          <div className="col-span-3 p-4">
            <img
              className="rounded"
              src="https://cashflowinventory.com/blog/wp-content/uploads/2023/09/Product-Assortment-1024x1024.jpg"
              alt=""
            />
            <Button variant="primary">Add To Cart</Button>
            <Button variant="danger">Buy Now</Button>
          </div>
          <div className="col-span-9 p-4">
            <h1 className="text-2xl font-bold">Product Name {params.id}</h1>
            <div>
              <p>
                price:{" "}
                <span className="text-gray-500 line-through mr-2">$100</span>
                <span className="text-red-500 font-bold">$80</span>
                <span className="ml-2 text-green-600 font-semibold bg-green-100 px-2 py-1 rounded text-xs">
                  20% OFF
                </span>
              </p>
              <p>
                Description: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Vero quidem officiis impedit suscipit in distinctio enim
                dolorum nulla cupiditate similique, harum illum iure ipsam,
                consectetur tenetur, eveniet quo. Fugiat qui, harum adipisci
                deleniti vel atque modi quos numquam! Ab numquam reiciendis et?
                Esse exercitationem eaque repudiandae est quas saepe cumque nemo
                dignissimos facere dolorum iure, accusamus nesciunt aut minus
                maxime at vel repellendus reiciendis laborum unde assumenda
                provident vitae. Consequuntur enim dolores hic, exercitationem
                odit laborum illo adipisci odio voluptatibus, praesentium quidem
                ut suscipit sunt mollitia natus ipsam iste. Aperiam accusamus
                vero necessitatibus in mollitia reprehenderit voluptates cumque
                molestiae ea.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
