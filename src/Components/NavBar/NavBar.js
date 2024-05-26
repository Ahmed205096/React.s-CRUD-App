import "./NavBar.css";
import { faHouse, faA, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBar() {

   return (
    <div className="nav-conatainer">
      <div className="nav-logo">
        <Link to={'/'}><h4 id="logo">Logo</h4></Link>
      </div>
      <div className="nav-links">
        <Link to={"/"} className="nav-link">
          <FontAwesomeIcon icon={faHouse} /> Home
        </Link>
        <Link to={"/about"} className="nav-link">
          <FontAwesomeIcon icon={faA} /> bout
        </Link>
        <Link to={"/contact"} className="nav-link">
          <FontAwesomeIcon icon={faPhone} pulse={true} /> Contact
        </Link>
      </div>
    </div>
  );
}
