import Notiflix from 'notiflix';

let watchedMovies = [];
let queuedMovies = [];

/*
 */
/* 

Przykład:

import { addToWatched, addToQueue } from './JS/local_storage';

BUTTON.addEventListener('click', () => addToWatched(movieID));
BUTTON.addEventListener('click', () => addToQueue(movieID));

"movieID" to będzie wynik funkcji pobierającej id filmu z modala

*/
/*
 */
/*
 */

/* funkcja potrzebna do pobrania wartości LocalStorage bo inaczej po zamknięciu strony będzie reset */
function getLocalWatched() {
  if (localStorage.getItem('watchedMovies') == undefined) {
    return;
  }
  const localWatchedMovies = localStorage.getItem('watchedMovies');
  watchedMovies = JSON.parse(localWatchedMovies);
}

/* funkcja potrzebna do pobrania wartości LocalStorage bo inaczej po zamknięciu strony będzie reset */
function getLocalQueue() {
  if (localStorage.getItem('queuedMovies') == undefined) {
    return;
  }
  const localQueuedMovies = localStorage.getItem('queuedMovies');
  queuedMovies = JSON.parse(localQueuedMovies);
}

/* dodaje id do "watched" do LocalStorage */
function addToWatched(id) {
  if (watchedMovies.includes(id)) {
    return Notiflix.Notify.info("This film is already on your 'Watched' list!");
  }
  watchedMovies.push(id);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
}

/* dodaje id do "queue" do LocalStorage */
function addToQueue(id) {
  if (queuedMovies.includes(id)) {
    return Notiflix.Notify.info("This film is already on your 'Queue' list!");
  }
  queuedMovies.push(id);
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
}

/* usuwa id z LocalStorage */
function deleteFromWatched(id) {
  const movieToDelete = watchedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    watchedMovies.splice(movieToDelete, 1);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist on your 'Watched' list!");
}

/* usuwa id z LocalStorage */
function deleteFromQueue(id) {
  const movieToDelete = queuedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    queuedMovies.splice(movieToDelete, 1);
    localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist on your 'Queue' list!");
}

/* pobiera id "watched" filmów z LocalStorage */
function getWatchedMovies() {
  const movies = localStorage.getItem('watchedMovies');
  const moviesParsed = JSON.parse(movies);
  return moviesParsed;
}

/* pobiera id "queue" filmów z LocalStorage */
function getQueuedMovies() {
  const movies = localStorage.getItem('queuedMovies');
  const moviesParsed = JSON.parse(movies);
  return moviesParsed;
}

export {
  addToWatched,
  addToQueue,
  deleteFromWatched,
  deleteFromQueue,
  getWatchedMovies,
  getQueuedMovies,
  getLocalWatched,
  getLocalQueue,
};
