import React from "react";
import Games from "./Boardgame";
import Footer from "./Footer";
import Header from "./Header";
import "./Homepage.css";
import axios from "axios";

const convert = require("xml-js");

function Homepage() {
  const [bgames, setGames] = React.useState([]);
  axios
    .get("https://boardgamegeek.com/xmlapi2/hot?boardgame")
    .then((response) => {
      const datagames = JSON.parse(
        convert.xml2json(response.data, { compact: true })
      );
      setGames(datagames.items.item);
      console.log(bgames);
    });
  return (
    <div>
      <Header />
      <div className="main-section">
        {bgames.map((gamesObject) => (
          <Games boardgames={gamesObject} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Homepage;
