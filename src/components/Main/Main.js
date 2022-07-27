import React from "react";
import "./Main.css";

function MainGame(props) {
  const text = props.game.description?._text;
  console.log(text);

  return (
    <div className="main-container-games">
      <div className="boardgame-header">
        <div>
          <h1 className="main-games-name">
            {Array.isArray(props.game.name)
              ? props.game.name[0]._attributes.value
              : props.game.name?._attributes.value}
          </h1>
          <p className="main-games-year">
            {props.game.yearpublished?._attributes.value}
          </p>
          <div className="boardgame-information">
            <p>
              Players: {props.game.minplayers?._attributes.value} -{" "}
              {props.game.maxplayers?._attributes.value}
            </p>
            <p>
              Playing Time: {props.game.minplaytime?._attributes.value} -{" "}
              {props.game.maxplaytime?._attributes.value}
            </p>
            <p>Age: {props.game.minage?._attributes.value} +</p>
          </div>
        </div>
        <img className="boardgame-image" src={props.game.image?._text} />
      </div>

      <p className="boardgame-description">
        {text !== undefined ? text.replace(/&#10;&#10;|&mdash;/g, " ") : ""}
      </p>
    </div>
  );
}

export default MainGame;
