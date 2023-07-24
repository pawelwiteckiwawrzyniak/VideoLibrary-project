const addToWatchedBtn = document.getElementById('add__watched-btn');
const addToQueueBtn = document.getElementById('add__queue-btn');
const watchedBtn = document.getElementById('watched-btn');
const queueBtn = document.getElementById('queue-btn');

const addWatchedMovie = id => {
  addToWatchedBtn.addEventListener('click', () => {
    localStorage.setItem('watched', JSON.stringify(id));
  });
};

const addQueueMovie = id => {
  addToQueueBtn.addEventListener('click', () => {
    localStorage.setItem('queue', JSON.stringify(id));
  });
};

const getWatchedMovie = () => {
  watchedBtn.addEventListener('click', () => {
    const watchedMovie = localStorage.getItem('watched');
    return watchedMovie ? JSON.parse(watchedMovie) : [];
  });
};

const getQueueMovie = () => {
  queueBtn.addEventListener('click', () => {
    const queueMovie = localStorage.getItem('queue');
    return queueMovie ? JSON.parse(queueMovie) : [];
  });
};

const movieID = 'id';

addWatchedMovie(movieID);
addQueueMovie(movieID);
getWatchedMovie();
getQueueMovie();
