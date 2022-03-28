import React from "react";
import "./App.css";

const FilmsList = ({ title,episiode_id, opening_crawl,director,producer }) => {

  return (
    <ul key={title}>
              <li className="movie-title">{title}</li>
              <div className="movie-details">
                  <span>{episiode_id}</span>
                  <span>{opening_crawl}</span>
                  <span>{director}</span>
                  <span>{producer}</span>
              </div>
            </ul>
  );
};

export default FilmsList;
