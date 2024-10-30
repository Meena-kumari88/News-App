
import axios from 'axios';

const API_URL = "https://your-chosen-movie-api-url";
const API_KEY = "your-rapidapi-key";  

export const fetchMovies = async (page = 1) => {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: { page, limit: 20 }, 
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'your-api-host'
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
