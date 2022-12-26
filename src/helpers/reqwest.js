export const reqwests = {
  fetchLoginWithPass: `/authentication/token/validate_with_login`,
  fetchCreateSession: `authentication/session/new?`,
  fetchToken: `/authentication/token/new?`,
  fetchTrending: `/trending/movie/day?`,
  fetchTopRaiting: `movie/top_rated?&language=en-US&page=1`,
  fetchUpcoming: `movie/upcoming?&language=en-US&page=1`,
  fetchGuestSession: `/authentication/guest_session/new`,
  fetchAddToFavorete: `/account/q/favorite`,
  fetchReview: movie_id => `/movie/${movie_id}/reviews?`,

  fetchSimilar: movie_id => `movie/${movie_id}/similar?&language=en-US&page=1`,
  fetchSingleMovie: movie_id => `/movie/${movie_id}?`,
  fetchMovieByName: name => `/search/movie?query=${name}&page=1&`,
  fetchCasts: movie_id => `/movie/${movie_id}/credits?`,
  fetchActor: actors_id => `/person/${actors_id}?`,
};
