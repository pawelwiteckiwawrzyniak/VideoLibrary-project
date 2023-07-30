/************************************************************************************************************************************************/
import * as api from './JS/api_films_database';
import * as filmsCard from './JS/film_cards';
import * as functionsProject from './JS/info_functions';
import * as modalCardFilm from './JS/modal_card_film';
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
  } catch (error) {
    console.log(error);
  }
  input.value = '';
}
async function loadPopularFilms(page) {
  try {
    const popularFilms = await api.fetchMovies(page);
    filmsCard.createFilmCards(popularFilms);
  } catch (error) {
    console.log(error);
  }
}

async function openCardFilm(eve) {
  eve.preventDefault();
  try {
    const infoFilm = await api.fetchMoviesByID(eve.target.id);
    modalCardFilm.createModalContent(infoFilm);
  } catch (error) {
    console.log(error);
  }
}

/************************************************************************************************************************************************/
loadPopularFilms();
