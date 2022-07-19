import "./Boardgame.css";

function Games(props) {
  return (
    <div
      className="boardgame-container"
      key={props.boardgames.name._attributes.value}
    >
      <h1 className="boardgame-name">
        {props.boardgames.name._attributes.value}
      </h1>
      <p className="boardgame-year">
        {props.boardgames.yearpublished?._attributes.value}
      </p>
      <img
        className="boardgame-image"
        src={props.boardgames.thumbnail._attributes.value}
      ></img>
    </div>
  );
}
export default Games;
