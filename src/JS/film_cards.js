function createFilmCards(films) {
  const markupImages = films.results
    .map(
      film =>
        `  
        <div class="film-card">
            <a href=<img class="film-card__img" src="${IMG_URL}${film.poster_path}" alt="${
          film.overview
        }" title="${film.title}" ID="${film.id}" loading="lazy"/></a>
            <div class="film-card__info">
                <p class="film-card__info-item">
                    <b>Title: </b>${film.title}
                </p>
                <p class="film-card__info-item">
                    <b>Genre: </b>${film.genre}
                </p>
                <p class="film-card__info-item">
                    <b>Year: </b>${film.release_date.split('-')[0]}
                </p>
            </div>
        </div>`,
    )
    .join(' ');
  gallery.innerHTML = markupImages;
}
