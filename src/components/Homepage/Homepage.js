import React from "react";
import "./Homepage.css";
import axios from "axios";
import BoardgameHot from "../BoardgameHot/BoardgameHot";

const convert = require("xml-js");

function Homepage() {
  const [bgames, setGames] = React.useState([]);
  const [idGame, setIdgame] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://boardgamegeek.com/xmlapi2/hot?boardgame")
      .then((response) => {
        const datagames = JSON.parse(
          convert.xml2json(response.data, { compact: true })
        );
        setGames(datagames.items.item);
      });
  }, []);
  const handleClick = (event) => {
    setIdgame(event.target.getAttribute("id"));
    console.log(event.target.getAttribute("id"));
  };
  return (
    <div>
      <h1 className="main-section-header">What's hot</h1>
      <div className="main-section">
        {bgames.map((gamesObject) => (
          <BoardgameHot
            onclick={handleClick}
            data-index={gamesObject._attributes.id}
            key={gamesObject._attributes.id}
            boardgames={gamesObject}
          />
        ))}
      </div>
    </div>
  );
}
export default Homepage;
