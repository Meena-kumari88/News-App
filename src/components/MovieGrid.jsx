
import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies }) => {
  if (!Array.isArray(movies) || movies.length === 0) {
    return <p>No movies found.</p>; 
  }

  return (
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
};

export default MovieGrid;
