import "./Boardgame.css";
import { Link } from "react-router-dom";

function Games(props) {
  return (
    <Link to="/boardgames">
      <div
        className="boardgame-container"
        onClick={props.onclick}
        id={props.boardgames._attributes.id}
      >
        <h1 className="boardgame-name" id={props.boardgames._attributes.id}>
          {props.boardgames.name._attributes.value}
        </h1>
        <p className="boardgame-year">
          {props.boardgames.yearpublished?._attributes.value}
        </p>
        <img
          className="boardgame-image"
          id={props.boardgames._attributes.id}
          src={props.boardgames.thumbnail?._attributes.value}
        ></img>
      </div>
    </Link>
  );
}
export default Games;
