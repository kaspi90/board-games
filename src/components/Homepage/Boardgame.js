import "./Boardgame.css";
import { Link } from "react-router-dom";

function Games(props) {
  return (
    <Link to="/boardgames">
      <div className="boardgame-container">
        <h1 className="boardgame-name">
          {props.boardgames.name._attributes.value}
        </h1>
        <p className="boardgame-year">
          {props.boardgames.yearpublished?._attributes.value}
        </p>
        <img
          className="boardgame-image"
          src={props.boardgames.thumbnail?._attributes.value}
        ></img>
      </div>
    </Link>
  );
}
export default Games;
