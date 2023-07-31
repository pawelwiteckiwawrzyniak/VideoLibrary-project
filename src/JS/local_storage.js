/************************************************************************************************************************************************/
import * as info from './info_functions';

/************************************************************************************************************************************************/
let watchedMovies = [];
let queuedMovies = [];

/************************************************************************************************************************************************/
export function getLocalWatched() {
  if (localStorage.getItem('watchedMovies') == undefined) {
    return;
  }
  const localWatchedMovies = localStorage.getItem('watchedMovies');
  watchedMovies = JSON.parse(localWatchedMovies);
}

export function getLocalQueue() {
  if (localStorage.getItem('queuedMovies') == undefined) {
    return;
  }
  const localQueuedMovies = localStorage.getItem('queuedMovies');
  queuedMovies = JSON.parse(localQueuedMovies);
}

/* funkcja potrzebna do pobrania wartości LocalStorage bo inaczej po zamknięciu strony będzie reset */
export function checkLocalStorage() {
  getLocalWatched();
  getLocalQueue();
}

/* dodaje id do "watched" do LocalStorage */
export function addToWatched(id) {
  if (watchedMovies.includes(id)) {
    return info.showInfo();
  }
  watchedMovies.push(id);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  info.showSuccess();
}
/* dodaje id do "queue" do LocalStorage */
export function addToQueue(id) {
  if (queuedMovies.includes(id)) {
    return info.showInfo();
  }
  queuedMovies.push(id);
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
  info.showSuccess();
}
/* usuwa id z LocalStorage */
export function deleteFromWatched(id) {
  const movieToDelete = watchedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    watchedMovies.splice(movieToDelete, 1);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    info.showDelete();
    return;
  }
  info.showWarning();
}
/* usuwa id z LocalStorage */
export function deleteFromQueue(id) {
  const movieToDelete = queuedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    queuedMovies.splice(movieToDelete, 1);
    localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
    info.showDelete();
    return;
  }
  info.showWarning();
}
/* pobiera id "watched" filmów z LocalStorage */
export function getWatchedMovies() {
  const movies = localStorage.getItem('watchedMovies');
  const moviesParsed = JSON.parse(movies);
  return moviesParsed;
}
/* pobiera id "queue" filmów z LocalStorage */
export function getQueuedMovies() {
  const movies = localStorage.getItem('queuedMovies');
  const moviesParsed = JSON.parse(movies);
  return moviesParsed;
}
/************************************************************************************************************************************************/
