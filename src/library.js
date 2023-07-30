import './sass/main.scss';
import * as local from './JS/local_storage';
import { fetchMoviesByID } from './JS/api_films_database';
import Notiflix from 'notiflix';

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
  const markup = `<div class="film-card">
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
    </div>`;
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
    fetchMoviesByID(index)
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
    fetchMoviesByID(index)
      .then(film => {
        spinner.classList.add('hidden');
        createFilmCards(film);
      })
      .catch(error => console.error(error));
  });
};

local.checkLocalStorage();

watchedBtn.addEventListener('click', handleClickWatched);
queueBtn.addEventListener('click', handleClickQueued);
