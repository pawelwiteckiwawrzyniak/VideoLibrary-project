import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '360px',
  borderRadius: '1px',
  timeout: '4000',
  showOnlyTheLastOne: 'true',
  fontFamily: '$secondary',
});

const showError = () => Notiflix.Notify.failure('Error has occured. Please try again later');

const showInfo = () => Notiflix.Notify.info('Already on the list!');

const showSuccess = () => Notify.success('Successfully added to your collection');

const showWarning = () => Notify.warning('Invalid data');

const hideEl = elem => {
  elem.classList.add('hidden');
};

const showEl = elem => {
  elem.classList.remove('hidden');
};

//użycie - hide/show(document.querySelector('element'))

export { showError, showInfo, showSuccess, showWarning, hideEl, showEl };
