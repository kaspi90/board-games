import "./Search.css";
import React from "react";

function Search(props) {
  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        name="search-bg"
        placeholder="search board games"
        onKeyDown={props.onkeydown}
      />
    </div>
  );
}
export default Search;
