const MY_KEY = '?api_key=3047fa8a1afb45f59f78389b618f1af2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/trending/movie/day' + MY_KEY;
const searchURL = BASE_URL + '/search/movie' + MY_KEY;
const GENRE_URL = BASE_URL + '/genre/movie/list' + MY_KEY;

const fetchMovies = async (page = 1) => {
  const url = `${API_URL}&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  console.log(response);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('No movie data available');
  }
  console.log(data);
  return data;
};

const fetchMoviesByName = async (searchValue, page = 1) => {
  console.log(searchValue);
  const url = `${searchURL}&query=${encodeURIComponent(searchValue)}&page=${page}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  console.log(response);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('No cat data available');
  }
  console.log(data);
  return data;
};
// ---------------------- kategorie filmów --------------------------------------------
const fetchGenres = async () => {
  const response = await fetch(GENRE_URL);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  console.log(response);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('No movie data available');
  }
  console.log(data);
  return data;
};
// -------------------- szukanie filmów przez id -------------------------------------
const fetchMoviesByID = async id => {
  const url = BASE_URL + `/movie/${id}` + MY_KEY;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Request failed');
  }
  console.log(response);
  const data = await response.json();
  if (data.length === 0) {
    throw new Error('No movie data available');
  }
  console.log(data);
  return data;
};

export { fetchMovies, fetchMoviesByName, fetchGenres, fetchMoviesByID };
