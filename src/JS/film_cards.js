/************************************************************************************************************************************************/
const gallery = document.querySelector('.section-films');
/************************************************************************************************************************************************/
export function createFilmCards(films) {
  const markupImages = films.results
    .map(
      film => `
      <div class="film-card">
        <img class="film-card__img" src="https://image.tmdb.org/t/p/w500/${
          film.poster_path
        }" alt=" Poster of ${film.title}" title="${film.title}" ID="${film.id}" loading="lazy"/>

        <div class="film-card__info">
            <p class="film-card__info--title">
            ${film.title}
            </p>
            <p class="film-card__info--subtitle">
            ${'Tu Genres'} | ${film.release_date.split('-')[0]}
            </p>
        </div>
    </div>
    </a>`,
    )
    .join(' ');
  gallery.innerHTML = markupImages;
}
