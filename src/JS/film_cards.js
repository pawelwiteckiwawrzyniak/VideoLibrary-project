const gallery = document.querySelector('.section-films');
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const gallery = document.querySelector('.section-films__list');

function createFilmCards(films) {
  console.log('aa');
  const markupImages = films.results
    .map(
      film => `
      <li><a href="" data-id="${film.id}">
      <div class="film-card">
        <img class="film-card__img" src="${IMG_URL}${film.poster_path}" alt="${
        film.overview
      }" title="${film.title}" ID="${film.id}" loading="lazy"/>

        <div class="film-card__info">
            <p class="film-card__info--title">
            ${film.title}
            </p>
            <p class="film-card__info--subtitle">
            ${film.genre} | ${film.release_date.split('-')[0]}
            </p>
        </div>
    </div>
    </a>
    </li>`,
    )
    .join(' ');
  gallery.innerHTML = markupImages;
}
export { createFilmCards };
