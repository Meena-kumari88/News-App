import axios from 'axios';

const API_KEY = '0fa2853e7c4d6c8f146aba861c5e4a06';
const BASE_URL = 'https://api.themoviedb.org/3';

// Fetch genres
export const fetchGenres = async () => {
  const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.genres;
};

// Fetch movies based on filters
export const fetchMovies = async (sortBy, page, selectedGenre, searchQuery) => {
  const endpoint = searchQuery ? 'search/movie' : 'discover/movie';
  const response = await axios.get(`${BASE_URL}/${endpoint}`, {
    params: {
      api_key: API_KEY,
      sort_by: sortBy,
      page,
      with_genres: selectedGenre,
      query: searchQuery,
    },
  });
  return response.data.results;
};
