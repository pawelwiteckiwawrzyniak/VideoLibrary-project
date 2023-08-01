import './sass/main.scss';
import * as local from './JS/local_storage';
import * as api from './JS/api_films_database';
import * as filmsCard from './JS/film_cards';
import * as modalCardFilm from './JS/modal_card_film';
import * as studentsInfo from './JS/modal_footer';
import * as info from './JS/info_functions';

const spinner = document.querySelector('.loader__div');
spinner.classList.add('hidden');
const gallery = document.querySelector('.section-films');
const watchedBtn = document.querySelector('#watched-btn');
const queueBtn = document.querySelector('#queue-btn');
const libBtn = document.querySelector('.btn__main');

const genres = film => {
  const arrayOfGenres = [];
  for (const genre of film.genres) {
    arrayOfGenres.push(genre.name);
  }
  return arrayOfGenres.join(', ');
};

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
  gallery.insertAdjacentHTML('beforeend', markup);
};

const handleClickWatched = () => {
  spinner.classList.remove('hidden');
  gallery.innerHTML = '';
  if (localStorage.getItem('watchedMovies') == undefined) {
    spinner.classList.add('hidden');
    return;
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
    return;
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
    modalCardFilm.createModalContentLib(infoFilm);
  } catch (error) {
    console.log(error);
  }
}

function styleButtonBefore() {
  watchedBtn.style.background = '#ff6b01';
  watchedBtn.style.border = '1px solid #ff6b01';
  watchedBtn.style.boxShadow = ' 0px 8px 43px 0px rgba(255, 107, 1, 0.6)';
  watchedBtn.style.transform = 'scale(1.25)';
  watchedBtn.style.transitionDuration = '250ms';
  queueBtn.style.transform = 'scale(1)';
  queueBtn.style.background = 'transparent';
  queueBtn.style.borderRadius = '5px';
  queueBtn.style.border = '1px solid white';
  queueBtn.style.color = 'get-color(brand_color-first)';
}

function styleButtonAfter() {
  watchedBtn.style.transform = 'scale(1)';
  watchedBtn.style.background = 'transparent';
  watchedBtn.style.borderRadius = '5px';
  watchedBtn.style.border = '1px solid white';
  watchedBtn.style.color = 'get-color(brand_color-first)';
  queueBtn.style.background = '#ff6b01';
  queueBtn.style.border = '1px solid #ff6b01';
  queueBtn.style.boxShadow = ' 0px 8px 43px 0px rgba(255, 107, 1, 0.6)';
  queueBtn.style.transform = 'scale(1.25)';
  queueBtn.style.transitionDuration = '250ms';
}

function defaultList() {
  styleButtonBefore();
  handleClickWatched();
}

local.checkLocalStorage();

gallery.addEventListener('click', openCardFilm);

defaultList();

watchedBtn.addEventListener('click', () => {
  styleButtonBefore();
  handleClickWatched();
});
queueBtn.addEventListener('click', () => {
  styleButtonAfter();
  handleClickQueued();
});
