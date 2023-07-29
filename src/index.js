/************************************************************************************************************************************************/
import * as api from './js/api_films_database';
import * as filmsCard from './js/film_cards';
import * as functionsProject from './js/info_functions';
import * as modalCardFilm from './js/modal_card_film';
import './sass/main.scss';

/************************************************************************************************************************************************/
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('.search-form__input');
const cardsFilm = document.querySelector('.section-films');

// const spinner = document.querySelector('.loader__div');

/************************************************************************************************************************************************/
searchForm.addEventListener('submit', searchFilms);
cardsFilm.addEventListener('click', openCardFilm);

/************************************************************************************************************************************************/
async function searchFilms(eve) {
  eve.preventDefault();
  try {
    const popularFilms = await api.fetchMoviesByName(input.value, 1);
    filmsCard.createFilmCards(popularFilms);
    console.log(popularFilms);
  } catch (error) {
    console.log(error);
  }
  input.value = '';
}
async function loadPopularFilms(page) {
  try {
    const popularFilms = await api.fetchMovies(page);
    filmsCard.createFilmCards(popularFilms);
    console.log(popularFilms);
  } catch (error) {
    console.log(error);
  }
}

async function openCardFilm(eve) {
  console.log(eve.target.id);
  try {
    const infoFilm = await api.fetchMoviesByID(eve.target.id);
    console.log('filminfo');
    console.log(infoFilm);
    modalCardFilm.createModalContent(infoFilm);
  } catch (error) {
    console.log(error);
  }
}

/************************************************************************************************************************************************/
loadPopularFilms();
