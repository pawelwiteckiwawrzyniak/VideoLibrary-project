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
  localStorage.setItem('watchedMovies', localWatchedMovies);
}

/* funkcja potrzebna do pobrania wartości LocalStorage bo inaczej po zamknięciu strony będzie reset */
function getLocalQueue() {
  if (localStorage.getItem('queuedMovies') == undefined) {
    return;
  }
  const localQueuedMovies = localStorage.getItem('queuedMovies');
  localStorage.setItem('queuedMovies', localQueuedMovies);
}

/* dodaje id do "watched" do LocalStorage */
function addToWatched(id) {
  watchedMovies.push(id);
  localStorage.setItem('watchedMovies', watchedMovies);
}

/* dodaje id do "queue" do LocalStorage */
function addToQueue(id) {
  queuedMovies.push(id);
  localStorage.setItem('queuedMovies', queuedMovies);
}

/* usuwa id z LocalStorage */
function deleteFromWatched(id) {
  const movieToDelete = watchedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    watchedMovies.splice(movieToDelete, 1);
    localStorage.setItem('watchedMovies', watchedMovies);
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist in your 'Watched' list!");
}

/* usuwa id z LocalStorage */
function deleteFromQueue(id) {
  const movieToDelete = queuedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    queuedMovies.splice(movieToDelete, 1);
    localStorage.setItem('queuedMovies', queuedMovies);
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist in your 'Queue' list!");
}

/* pobiera id "watched" filmów z LocalStorage */
function getWatchedMovies() {
  const movies = localStorage.getItem('watchedMovies');
  return movies;
}

/* pobiera id "queue" filmów z LocalStorage */
function getQueuedMovies() {
  const movies = localStorage.getItem('queuedMovies');
  return movies;
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
