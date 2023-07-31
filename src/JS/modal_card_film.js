/************************************************************************************************************************************************/
import * as functionsProject from './info_functions';
import * as localStorage from './local_storage';
import * as api from './api_films_database';

/************************************************************************************************************************************************/

const modalFilmCard = document.querySelector('.backdrop');
/************************************************************************************************************************************************/
let idFilm = null;

/************************************************************************************************************************************************/
function openModal() {
  functionsProject.showEl(modalFilmCard);
  window.addEventListener('click', widowEvent);
  window.addEventListener('keydown', keyListener);
}
function closeModal() {
  functionsProject.hideEl(modalFilmCard);
  window.removeEventListener('Click', widowEvent);
  window.removeEventListener('keydown', keyListener);
}
function addToWatched() {
  localStorage.addToWatched(idFilm);
  console.log(`dodano film do obejrzanych o id ${idFilm}`);
  //'Dodano Film do Obejrzanych'
}

function addToQueued() {
  localStorage.addToQueue(idFilm);
  console.log(`dodano film do kolejki o id ${idFilm}`);
  //'Dodano Film do  kolejki'
}

function widowEvent(eve) {
  if (eve.target == modalFilmCard) {
    closeModal();
  }
}

function keyListener(eve) {
  if (eve.key === 'Escape') {
    closeModal();
  }
}
/************************************************************************************************************************************************/
export const genres = film => {
  const arrayOfGenres = [];
  for (const genre of film.genres) {
    arrayOfGenres.push(genre.name);
  }
  return arrayOfGenres.join(', ');
};

export function createModalContent(filmData) {
  let imgSRC = api.IMG_URL + filmData.poster_path;
  if (filmData.poster_path == null || filmData.poster_path == undefined) {
    imgSRC = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';
  }

  const modalContent = `
  <div class="modal-film__container modal-film">
    <button type="button" class="modal-film__button" data-modal-close>
      X
      <!-- <svg class="modal-film__close-icon">
        <use href="./images/icons.svg#icon-close-black-18dp-2-1"></use>
      </svg> -->
    </button>
    <div class="modal-film__img-frame">
      <img class="modal-film__img" src="${imgSRC}" alt="" />
    </div>
    <div class="modal-film__card">
      <h2 class="modal-film__title">${filmData.title}</h2>
      <div class="modal-film__list">
        <ul>
          <li class="id"></li>
          <li class="modal-film__content-text">Vote / Votes</li>
          <li class="modal-film__content-text">Popularity</li>
          <li class="modal-film__content-text">Original Title</li>
          <li class="modal-film__content-text">Genre</li>
        </ul>
        <ul class="modal-film__content">
          <div class="modal-film__rate">
            <li class="modal-film__rate-content modal-film__wtf">${filmData.vote_average}</li>
            <li class="modal-film__rate-content modal-film__slash">/</li>
            <li class="modal-film__rate-content modal-film__wtf-two">${filmData.vote_count}</li>
          </div>
          <li class="modal-film__rate-content">${filmData.popularity}</li>
          <li class="modal-film__rate-content modal-film__inner-title">${
            filmData.original_title
          }</li>
          <li class="modal-film__rate-content">${genres(filmData)}</li>
        </ul>
      </div>
      <h3 class="modal-film__about">About</h3>
      <p class="modal-film__desc">${filmData.overview}</p>
      <div class="modal-film__buttons">
        <button class="btn__modal" type="button" id="add__watched-btn">ADD TO WATCHED</button>
        <button class="btn__modal" type="button" id="add__queue-btn">ADD TO QUEUE</button>
      </div>
    </div>
  </div>
    `;

  modalFilmCard.innerHTML = modalContent;
  const addToQueueBtn = document.querySelector('#add__queue-btn');
  const addToWatchedBtn = document.querySelector('#add__watched-btn');
  const exitBtn = document.querySelector('[data-modal-close]');

  localStorage.checkLocalStorage();

  addToQueueBtn.addEventListener('click', addToQueued);
  addToWatchedBtn.addEventListener('click', addToWatched);
  exitBtn.addEventListener('click', closeModal);
  idFilm = filmData.id;
  openModal();
}
/************************************************************************************************************************************************/
