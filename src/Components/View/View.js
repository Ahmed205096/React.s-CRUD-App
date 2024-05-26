import { useParams } from "react-router-dom";
import { GetAPI } from "../APIs/APIs";
import "./View.css";

export default function View() {
  const params = useParams();

  const products = GetAPI();

  return products
    .filter((product) => product.id === params.ID)
    .map((product) => {
      return (
        <div className="view-container" key={product.id}>
          <div>
            <div className="img-container">
              <img src={product.image} alt={product.title} />
            </div>

            <div className="view-title">
              <h5>{product.title}</h5>
            </div>

            <div className="view-description">
              <p>Description: {product.description}</p>
            </div>

            <div className="view-price-rating">
              <h6>Price: ${product.price}</h6>
              <h6>Rating: {product.rating.rate}</h6>
            </div>
          </div>
        </div>
      );
    });
}
