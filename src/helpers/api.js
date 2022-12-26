// import axios from 'axios';
// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '08cfb1cba341ef968995af439d190569';

// export const getDataFromAPI = async () => {
//   const { data } = await axios.get(
//     `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
//   );
//   return data.results;
// };

// export const getSingleMovie = async movie_id => {
//   const { data } = await axios.get(
//     `${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`
//   );

//   return data;
// };
// export const getCasts = async movie_id => {
//   const { data } = await axios.get(
//     `${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getReviews = async movie_id => {
//   const { data } = await axios.get(
//     `${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}`
//   );
//   return data;
// };

// export const getMovieByName = async movie_name => {
//   const { data } = await axios.get(
//     `${BASE_URL}/search/movie?query=${movie_name}&page=1&api_key=${API_KEY}`
//   );
//   return data.results;
// };

// export const getActorById = async actots_id => {
//   const { data } = await axios.get(
//     `${BASE_URL}/person/${actots_id}?api_key=${API_KEY}`
//   );
//   return data;
// };
