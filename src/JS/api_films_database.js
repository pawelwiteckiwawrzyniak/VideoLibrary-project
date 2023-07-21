const MY_KEY = "?api_key=3047fa8a1afb45f59f78389b618f1af2"
const IMG_URL = "https://image.tmdb.org/t/p/w500/"
const BASE_URL = "https://api.themoviedb.org/3"
const API_URL = BASE_URL + '/trending/movie/day' + MY_KEY
const searchURL = BASE_URL + '/search/movie' + MY_KEY
const fetchMovies = (url) => {
    return fetch(url)
    .then(response => {
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      console.log(response)
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        throw new Error('No movie data available');
      }
      console.log(data)
      return data;
    });
}
const fetchMoviesByName = (searchValue) => {
    const url = `${searchURL}&query=${encodeURIComponent(searchValue)}`

    return fetch(url)
    .then(response => {
      
      if (!response.ok) {
        throw new Error('Request failed');
      }
      console.log(response)
      return response.json();
    })
    .then(data => {
      if (data.length === 0) {
        throw new Error('No movie data available');
      }
      console.log(data)
      return data;
    });
}
export {fetchMovies,fetchMoviesByName}