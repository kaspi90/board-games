import MainGame from "./Main";
import "./Games.css";
import Search from "./Search";
import React from "react";
import axios from "axios";
const convert = require("xml-js");

function Boardgames() {
  const [gameName, setInput] = React.useState("");
  const [games, setBoardgames] = React.useState([]);
  const [id, setId] = React.useState([]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setInput(event.target.value);
      console.log(gameName);
      if (gameName.length > 0) {
        fetchid(gameName);
        if (Array.isArray(id)) {
          const idGame = id[0]._attributes.id;
          console.log(idGame);
          fetchgames(idGame);
        } else {
          const idGame = id._attributes.id;
          console.log(idGame);
          fetchgames(idGame);
        }
      }
    }
  };
  const fetchid = (game) => {
    axios
      .get(`https://boardgamegeek.com/xmlapi2/search/?query=${game}&exact=1`)
      .then((response) => {
        const data = JSON.parse(
          convert.xml2json(response.data, { compact: true })
        );
        setId(data.items.item);
      });
    console.log(id);
  };
  const fetchgames = (game) => {
    axios
      .get(`https://www.boardgamegeek.com/xmlapi2/thing?id=${game}`)
      .then((response) => {
        const data = JSON.parse(
          convert.xml2json(response.data, { compact: true })
        );
        setBoardgames(data.items.item);
      });
    console.log(games);
  };

  return (
    <div className="main-section-games">
      <Search onkeydown={handleKeyDown} onchange={handleKeyDown} />
      <MainGame game={games} />
    </div>
  );
}

export default Boardgames;
