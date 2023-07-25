function createFilmCards(films) {
  const markupImages = films
    .map(
      film =>
        `  
        <div class="film-card">
            <a href="${film.IMG_URL}"><img src="${film.API_URL}" alt="${film.title}" title="${film.title}" loading="lazy"/></a>
            <div class="info">
                <p class="info-item">
                    <b>Title: </b>${film.title}
                </p>
                <p class="info-item">
                    <b>Genre: </b>${film.genre}
                </p>
                <p class="info-item">
                    <b>Year: </b>${film.year}
                </p>
                <p class="info-item">
                    <b>ID: </b>${film.id}
                </p>
            </div>
        </div>`,
    )
    .join(' ');
  gallery.innerHTML = markupImages;
}
