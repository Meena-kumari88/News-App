// src/components/MovieGrid.jsx
import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => (
  <div className="movie-grid">
    {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        year={movie.year}
        poster={movie.poster}
      />
    ))}
  </div>
);

export default MovieGrid;
