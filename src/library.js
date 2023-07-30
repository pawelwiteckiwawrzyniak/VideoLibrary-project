import './sass/main.scss';
import Notiflix from 'notiflix';
import * as local from './JS/local_storage';
import * as api from './JS/api_films_database';
import * as filmsCard from './JS/film_cards';
import * as modalCardFilm from './JS/modal_card_film';
import * as studentsInfo from './JS/modal_footer';

const spinner = document.querySelector('.loader__div');
spinner.classList.add('hidden');
const gallery = document.querySelector('.section-films');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');

const genres = film => {
  const arrayOfGenres = [];
  for (const genre of film.genres) {
    arrayOfGenres.push(genre.name);
  }
  return arrayOfGenres.join(', ');
};

const createFilmCards = film => {
  const markup = `
  <div class="film-card">
    <img class="film-card__img" src="https://image.tmdb.org/t/p/w500/${film.poster_path}" alt="${
    film.overview
  }" title="${film.title}" ID="${film.id}" loading="lazy"/>

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
  gallery.insertAdjacentHTML('beforeend', markup);
};

const handleClickWatched = () => {
  spinner.classList.remove('hidden');
  gallery.innerHTML = '';
  if (localStorage.getItem('watchedMovies') == undefined) {
    spinner.classList.add('hidden');
    return Notiflix.Notify.info('Sorry! Your list is empty!');
  }
  local.getWatchedMovies().map(index => {
    api
      .fetchMoviesByID(index)
      .then(film => {
        spinner.classList.add('hidden');
        createFilmCards(film);
      })
      .catch(error => console.error(error));
  });
};

const handleClickQueued = () => {
  spinner.classList.remove('hidden');
  gallery.innerHTML = '';
  if (localStorage.getItem('queuedMovies') == undefined) {
    spinner.classList.add('hidden');
    return Notiflix.Notify.info('Sorry! Your list is empty!');
  }
  local.getQueuedMovies().map(index => {
    api
      .fetchMoviesByID(index)
      .then(film => {
        spinner.classList.add('hidden');
        createFilmCards(film);
      })
      .catch(error => console.error(error));
  });
};

async function openCardFilm(eve) {
  eve.preventDefault();
  try {
    const infoFilm = await api.fetchMoviesByID(eve.target.id);
    modalCardFilm.createModalContent(infoFilm);
  } catch (error) {
    console.log(error);
  }
}

local.checkLocalStorage();

gallery.addEventListener('click', openCardFilm);

watchedBtn.addEventListener('click', handleClickWatched);
queueBtn.addEventListener('click', handleClickQueued);

/* `<div class="film-card">
        <img class="film-card__img" src="https://image.tmdb.org/t/p/w500${
          film.poster_path
        }" alt="poster of ${film.title}" loading="lazy"/>
        <div class="film-card__info">
            <p class="film-card__info--title">
            ${film.title}
            </p>
            <p class="film-card__info--subtitle">
            ${genres(film)} | ${film.release_date.split('-')[0]}
            </p>
        </div>
    </div>` */
