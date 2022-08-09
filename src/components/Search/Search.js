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
        // REVIEW: Good use of passing down a function as props to lift up the state
        onKeyDown={props.onkeydown}
      />
    </div>
  );
}
export default Search;
