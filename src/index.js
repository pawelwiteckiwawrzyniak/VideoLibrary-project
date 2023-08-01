/************************************************************************************************************************************************/
import * as api from './JS/api_films_database';
import * as filmsCard from './JS/film_cards';
import * as functionsProject from './JS/info_functions';
import * as modalCardFilm from './JS/modal_card_film';
import * as studentsInfo from './JS/modal_footer';
import { substractingArrow, addingArrow, selectPages, createPageHome } from './JS/select_page';
import './sass/main.scss';

/************************************************************************************************************************************************/
const searchForm = document.querySelector('#search-form');
const input = document.querySelector('.search-form__input');
const cardsFilm = document.querySelector('.section-films');
//const studentsModal = document.querySelector('#studentsModal');
const spinner = document.querySelector('.loader__div');

let plusArrow = document.querySelector('#plus');
let minusArrow = document.querySelector('#minus');
let boxPages = document.querySelector('.page');
let searchMovie;

/************************************************************************************************************************************************/
searchForm.addEventListener('submit', searchFilms);
cardsFilm.addEventListener('click', openCardFilm);
//studentsModal.addEventListener('click', openCardFilm);
/************************************************************************************************************************************************/
spinner.classList.add('hidden');
const createFilmCards = film => {
  let imgSRC = api.IMG_URL + film.poster_path;
  if (film.poster_path == null || film.poster_path == undefined) {
    imgSRC = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
  }

  const markup = `
  <div class="film-card">
    <img class="film-card__img" src="${imgSRC}" alt=" Poster of a movie titled '${
    film.title
  }'" title="${film.title}" ID="${film.id}" loading="lazy"/>

    <div class="film-card__info">
        <p class="film-card__info--title">
        ${film.title}
        </p>
        <p class="film-card__info--subtitle">
        ${genres(film)} | ${film.release_date.split('-')[0]}
        </p>
    </div>
</div>
</a>`;
  cardsFilm.insertAdjacentHTML('beforeend', markup);
};

const ids = movies => {
  const arrOdIds = [];
  for (const movie of movies) {
    arrOdIds.push(movie.id);
  }
  return arrOdIds;
};

export const genres = film => {
  const arrayOfGenres = [];
  for (const genre of film.genres) {
    arrayOfGenres.push(genre.name);
  }

  return arrayOfGenres.join(', ');
};

function searchFilms(eve) {
  eve.preventDefault();
  searchFilms1();
  searchMovie = input.value;
}
async function searchFilms1() {
  try {
    const popularFilms = await api.fetchMoviesByName(input.value, 1);
    searchMovie = input.value;
    const movies = popularFilms;

    cardsFilm.innerHTML = '';
    spinner.classList.remove('hidden');
    ids(movies).map(index => {
      api
        .fetchMoviesByID(index)
        .then(film => {
          createFilmCards(film);
        })
        .catch(error => console.error(error));
    });
  } catch (error) {
    console.log(error);
  }
  createPageHome(api.totalPage, 1);
  spinner.classList.add('hidden');
  input.value = '';
}

async function searchFilms2(filmName) {
  try {
    const popularFilms = await api.fetchMoviesByName(filmName, 1);
    const movies = popularFilms;
    cardsFilm.innerHTML = '';
    spinner.classList.remove('hidden');
    ids(movies).map(index => {
      api
        .fetchMoviesByID(index)
        .then(film => {
          createFilmCards(film);
        })
        .catch(error => console.error(error));
    });
  } catch (error) {
    console.log(error);
  }
  createPageHome(api.totalPage, 1);
  spinner.classList.add('hidden');
}
async function loadPopularFilms(page) {
  try {
    spinner.classList.remove('hidden');
    const popularFilms = await api.fetchMovies(page);
    // const popularFilms = await api.fetchMoviesByName(searchMovie, 1);
    const movies = popularFilms;
    ids(movies).map(index => {
      api
        .fetchMoviesByID(index)
        .then(film => {
          createFilmCards(film);
        })
        .catch(error => console.error(error));
    });
  } catch (error) {
    console.log(error);
  }
  spinner.classList.add('hidden');
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

createPageHome(api.totalPage, 1);
plusArrow.addEventListener('click', addingArrow);
boxPages.addEventListener('click', selectPages);
minusArrow.addEventListener('click', substractingArrow);
export { loadPopularFilms, searchMovie };
