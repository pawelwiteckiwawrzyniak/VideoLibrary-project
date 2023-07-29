import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '360px',
  borderRadius: '1px',
  timeout: '4000',
  showOnlyTheLastOne: 'true',
  fontFamily: '$secondary',
});

showError => Notiflix.Notify.failure('Error has occured. Please try again later');

showInfo => Notify.info('Already on the list!');

showSuccess => Notify.success('Successfully added to your collection');

showWarning => Notify.warning('Invalid data');

const hideEl = elem => {
  elem.classList.add('hidden');
};

const showEl = elem => {
  elem.classList.remove('hidden');
};

//użycie - hide/show(document.querySelector('element'))

export { showError, showInfo, showSuccess, showWarning, hideEl, showEl };
