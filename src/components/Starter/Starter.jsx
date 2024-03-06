import "./Starter.css";
import { Link } from "react-router-dom";
// Komponente für die Homeseite
const Starter = (props) => {
  return (
    <div className="starter">
      <img src={props.img} alt="" />
      <Link to={props.link}>
        <h2>{props.headline}</h2>
      </Link>
      <p>{props.description}</p>
    </div>
  );
};

export default Starter;
