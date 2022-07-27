import "./Games.css";

import React from "react";
import axios from "axios";
import Search from "../Search/Search";
import MainGame from "../Main/Main";
const convert = require("xml-js");

function Boardgames() {
  const [gameName, setInput] = React.useState("");
  const [games, setBoardgames] = React.useState([]);
  const [id, setId] = React.useState([]);
  const [selects, setSelects] = React.useState([]);
  React.useEffect(() => {
    if (gameName.length > 0) {
      fetchid(gameName);
      document.querySelector(".selection-boardgames-container").style.display =
        "block";
    }
  }, [gameName]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      setInput(event.target.value);
      console.log(gameName);
    }
  };
  const fetchid = (game) => {
    axios
      .get(`https://boardgamegeek.com/xmlapi2/search/?query=${game}`)
      .then((response) => {
        const data = JSON.parse(
          convert.xml2json(response.data, { compact: true })
        );
        setId(data.items.item);
      });
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

  const handleChange = (e) => {
    setSelects(e.target.value);
    console.log(selects);
  };
  React.useEffect(() => {
    if (selects.length > 0) {
      fetchgames(selects);
      document.querySelector(".main-container-games").style.display = "block";
    }
  }, [selects]);
  let countKey = 1;

  return (
    <div className="main-section-games">
      <Search onkeydown={handleKeyDown} />
      <div className="selection-boardgames-container">
        <select
          value={selects || ""}
          className="selection-boardgames"
          onChange={handleChange}
        >
          <option value="">Please select your board game</option>
          {Array.isArray(id) ? (
            id.map((idObjects) => (
              <option key={countKey++} value={idObjects._attributes.id}>
                {idObjects.name._attributes.value}
              </option>
            ))
          ) : (
            <option key={countKey++} value={id._attributes.id}>
              {id.name._attributes.value}
            </option>
          )}
        </select>
      </div>
      <MainGame game={games} />
    </div>
  );
}

export default Boardgames;