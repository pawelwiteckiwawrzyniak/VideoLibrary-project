let arrowPage = 1;
const cardsFilm = document.querySelector('.section-films');
const paginacjaHome = document.querySelector('.page');
let plusArrow = document.querySelector('#plus');
let minusArrow = document.querySelector('#minus');
import { loadPopularFilms, searchMovie } from '../index';
import { totalPage } from './api_films_database';
// ********************************************************************************************************************************************
function createPage(numberOfPages, selectPage) {
  let data = [];
  if (numberOfPages === 1) {
    plusArrow.classList.add('hidden');
    minusArrow.classList.add('hidden');
    data.push(`<li class="page__numbers" id="page__selected">${1}</li>`);
    return data.join('');
  } else if (numberOfPages < 8) {
    plusArrow.classList.remove('hidden');
    minusArrow.classList.remove('hidden');
    for (let index = 1; index < numberOfPages + 1; index++) {
      if (index == selectPage) {
        data.push(`<li class="page__numbers" id="page__selected">${index}</li>`);
      } else {
        data.push(`<li class="page__numbers">${index}</li>`);
      }
    }
    return data.join('');
  } else {
    //***************************************************************************
    plusArrow.classList.remove('hidden');
    minusArrow.classList.remove('hidden');
    if (selectPage == 1) {
      data.push(`<li class="page__numbers" id="page__selected">${1}</li>`);
    } else {
      data.push(`<li class="page__numbers">${1}</li>`);
    }
    data.push(`<li class="page__dots"> ... </li>`);
    // numberOfPages/2 -3
    let startNumber = Math.floor(numberOfPages / 2 - 2);
    if (selectPage > 1) {
      startNumber = selectPage - 2;
    }
    stopNumber = startNumber + 5;
    if (numberOfPages < selectPage + 4) {
      startNumber = numberOfPages - 5;
      stopNumber = numberOfPages;
    }
    if (selectPage < 4 && selectPage !== 1) {
      startNumber = 2;
      stopNumber = startNumber + 5;
    }
    for (let index = startNumber; index < stopNumber; index++) {
      if (index == selectPage) {
        data.push(`<li class="page__numbers" id="page__selected">${index}</li>`);
      } else {
        data.push(`<li class="page__numbers">${index}</li>`);
      }
    }
    data.push(`<li class="page__dots"> ... </li>`);
    if (selectPage == numberOfPages) {
      data.push(`<li class="page__numbers" id="page__selected">${numberOfPages}</li>`);
    } else {
      data.push(`<li class="page__numbers">${numberOfPages}</li>`);
    }
    //***************************************************************************
    return data.join('');
  }
}
export function createPageHome(numbers, selectPage) {
  paginacjaHome.innerHTML = createPage(numbers, selectPage);
}
export function nextPage() {
  createPageHome(20, ++arrowPage);
}
export function previousePage() {
  createPageHome(20, --arrowPage);
}
function selectPages(event) {
  const selectedPage = event.target.textContent;
  cardsFilm.innerHTML = '';
  arrowPage = parseInt(selectedPage);
  if (searchMovie === '') {
    createPageHome(totalPage, arrowPage);
    loadPopularFilms(arrowPage);
  } else {
    createPageHome(totalPage, arrowPage);
    searchFilms2(searchMovie, arrowPage);
    //searchMovie(arrowPage);
  }
}
function substractingArrow() {
  if (arrowPage === 1) {
    return;
  }
  arrowPage -= 1;
  cardsFilm.innerHTML = '';
  createPageHome(totalPage, arrowPage);
  loadPopularFilms(arrowPage);
}
function addingArrow() {
  if (arrowPage === 500) {
    return;
  }
  arrowPage += 1;
  cardsFilm.innerHTML = '';
  createPageHome(totalPage, arrowPage);
  loadPopularFilms(arrowPage);
}
export { substractingArrow, addingArrow, selectPages, totalPage };
