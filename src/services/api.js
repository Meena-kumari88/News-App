
import axios from 'axios';

const API_URL = "https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US";
const API_KEY = "a219ee9356msh0fc94a5b5bfde7dp150e73jsn4bedfa9215de";  

export const fetchMovies = async (page = 1) => {
  try {
    const response = await axios.get(API_URL, {
      params: { page, limit: 20 },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    });

    console.log("API response in JSON:", JSON.stringify(response.data)); 
    const movies = response.data?.data || []; 

    return Array.isArray(movies) ? movies : []; 
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
