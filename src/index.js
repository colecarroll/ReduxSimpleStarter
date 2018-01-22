import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";

//create a new component. This component should produce html
const API_KEY = "AIzaSyAXumtanq0H1Ruluac-OsaJUHxsE-xhNb4";

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

//take this components generated html and put in on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
