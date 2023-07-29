import './info_functions';
import './api_films_database';

const modal = document.querySelector('[data-modal]');
const openModalBtn = document.querySelector('[data-modal-open]');
const closeModalBtn = document.querySelector('[data-modal-close]');

function toggleModal(event) {
  if (event.target === openModalBtn) {
    modal.classList.toggle('hidden');
  }
}

//openModalBtn.addEventListener('click', toggleModal);

function closeModal(event) {
  if (event.key === 'Escape') {
    hideEl(document.querySelector('modal'));
  }
}

function closeModalClick(event) {
  if (event.target === closeModalBtn) {
    hideEl(document.querySelector('modal'));
  }
}

document.addEventListener('keydown', closeModal);
document.addEventListener('click', closeModalClick);

function createModalContent(filmData) {
  const modalContent = `
  <h1 class="modal_film_open">${filmData.title}</h1>
  <div class="modal-film__container">
    <button type="button" class="modal-film__button" data-modal-close>
      X
      <!-- <svg class="modal-film__close-icon">
        <use href="./images/icons.svg#icon-close-black-18dp-2-1"></use>
      </svg> -->
    </button>
    <div class="modal-film__img-frame">
      <img class="modal-film__img" src="${IMG_URL}${filmData.poster_path}" alt="" />
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
          <li class="modal-film__rate-content modal-film__inner-title">${filmData.original_title}</li>
          <li class="modal-film__rate-content">${filmData.genre}</li>
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
  const modalFilmCard = document.querySelector('.modal_film_open');
  modalFilmCard.innerHTML = modalContent;
}

function addToWatched(event) {
  if (!getWatchedMovie.includes(movieID)) {
    getWatchedMovie.push(movieID);
    showSuccess;
  } else {
    showInfo;
  }
  addToWatchedBtn.addEventListener('click', addToWatched);
}

function addToQueued(event) {
  if (!getQueueMovie.includes(movieID)) {
    getQueueMovie.push(movieID);
    showSuccess;
  } else {
    showInfo;
  }
  addToQueueBtn.addEventListener('click', addToQueued);
}
