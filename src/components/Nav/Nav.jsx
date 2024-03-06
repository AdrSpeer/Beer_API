import { Link } from "react-router-dom";
import "./Nav.css";

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
