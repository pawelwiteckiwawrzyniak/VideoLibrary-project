import Notiflix, { Notify } from 'notiflix';

Notiflix.Notify.init({
  showOnlyTheLastOne: 'true',
  fontFamily: '$secondary',
  position: 'center-top',
  clickToClose: 'true',
  closeButton: 'true',
  timeout: '3000',
});

const showError = () => Notiflix.Notify.failure('Error has occured. Please try again later');

const showInfo = () => Notiflix.Notify.info('Already on the list!');

const showSuccess = () => Notify.success('Successfully added to your collection');

const showWarning = () => Notify.warning('Invalid data');

const showDelete = () => Notiflix.Notify.info('Successfully deleted from your collection');

const hideEl = elem => {
  elem.classList.add('hidden');
};

const showEl = elem => {
  elem.classList.remove('hidden');
};

//użycie - hide/show(document.querySelector('element'))

export { showDelete, showError, showInfo, showSuccess, showWarning, hideEl, showEl };
