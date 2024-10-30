
import React from 'react';
//import './MovieCard.css';

const MovieCard = ({ title, year, poster }) => (
  <div className="movie-card">
    <img src={poster} alt={title} />
    <h3>{title}</h3>
    <p>{year}</p>
  </div>
);

export default MovieCard;
