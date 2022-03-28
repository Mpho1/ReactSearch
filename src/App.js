import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import "./index.css";

import SearchForm from "./SearchForm.js";
import FilmsList from "./FilmList.js";

const App = () => {
  // useState search query
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // perform the search with the api
  const performLookup = () => {
    fetch(`https://swapi.dev/api/films/?search=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.results))
      .catch((error) => console.log(error));

    setResults(results);
    console.log(results);
  };

  // run the query
  useEffect(() => {
    performLookup();
  }, [query]);

  return (
    <div className="app">
      <h1>Find A Star Wars Movie</h1>

      <SearchForm query={query} setQuery={setQuery} />

      {/* Map the results */}
      {results.map((result) => (
        <FilmsList
          key={result.name}
          title={result.title}
          opening_crawl={result.opening_crawl}
          director={result.director}
        />
      ))}
    </div>
  );
};

export default App;

