import { Link } from "react-router-dom";
import { DeleteAPI, GetAPI } from "../APIs/APIs";
import "./Table.css";
import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Table() {
  const products = GetAPI();

  const productList = products.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.title.slice(0, 70)}</td>
        <td>{product.price}$</td>
        <td>{product.rating.rate}</td>
        <td>
          <Link to={`/view/${product.id}`}>
            <button className="view btn">
              <FontAwesomeIcon icon={faEye} /> View
            </button>
          </Link>
          <button className="edit btn">
            <FontAwesomeIcon icon={faPenToSquare} /> Edit
          </button>
          <button className="delete btn" onClick={()=>{DeleteAPI(product.id);}}>
            <FontAwesomeIcon icon={faTrash} /> Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{productList}</tbody>
      </table>
    </div>
  );
}
