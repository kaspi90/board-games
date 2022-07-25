import React, { useEffect } from "react";
import Games from "./Boardgame";
import "./Homepage.css";
import axios from "axios";

const convert = require("xml-js");

function Homepage() {
  const [bgames, setGames] = React.useState([]);
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

  return (
    <div className="main-section">
      {bgames.map((gamesObject) => (
        <Games key={gamesObject._attributes.id} boardgames={gamesObject} />
      ))}
    </div>
  );
}
export default Homepage;
