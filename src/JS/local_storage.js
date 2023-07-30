/************************************************************************************************************************************************/
import Notiflix from 'notiflix';

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
    return Notiflix.Notify.info("This film is already on your 'Watched' list!");
  }
  watchedMovies.push(id);
  localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
}
/* dodaje id do "queue" do LocalStorage */
export function addToQueue(id) {
  if (queuedMovies.includes(id)) {
    return Notiflix.Notify.info("This film is already on your 'Queue' list!");
  }
  queuedMovies.push(id);
  localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
}
/* usuwa id z LocalStorage */
export function deleteFromWatched(id) {
  const movieToDelete = watchedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    watchedMovies.splice(movieToDelete, 1);
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist on your 'Watched' list!");
}
/* usuwa id z LocalStorage */
export function deleteFromQueue(id) {
  const movieToDelete = queuedMovies.findIndex(value => value == id);
  if (movieToDelete != -1) {
    queuedMovies.splice(movieToDelete, 1);
    localStorage.setItem('queuedMovies', JSON.stringify(queuedMovies));
    return;
  }
  Notiflix.Notify.failure("Sorry! This movie doesn't exist on your 'Queue' list!");
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
