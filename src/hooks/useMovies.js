// src/hooks/useMovies.js
import { useState, useEffect } from 'react';
import { fetchMovies } from '../services/api';

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const loadMovies = async (page) => {
    try {
      setLoading(true);
      const data = await fetchMovies(page);
      setMovies(data.movies);  
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMovies(page);
  }, [page]);

  return { movies, loading, error, page, setPage };
};
