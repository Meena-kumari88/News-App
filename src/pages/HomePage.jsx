
import React from 'react';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';
import { useMovies } from '../hooks/useMovies';

const HomePage = () => {
  const { movies, loading, error, page, setPage } = useMovies();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <MovieGrid movies={movies} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

export default HomePage;
