import { Link } from "react-router-dom";
import "./Nav.css";
// Nav mit Img, die per Klick auf das Img zu Home zurückführt
const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src="../../../public/img/Logo.svg" alt="Logo" />
      </Link>
    </nav>
  );
};

export default Nav;
