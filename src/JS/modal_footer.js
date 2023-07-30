/************************************************************************************************************************************************/
import * as functionsProject from './info_functions';
/************************************************************************************************************************************************/
const studentsModal = document.querySelector('#studentsModal');
const openModalBtn = document.querySelector('#openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

/************************************************************************************************************************************************/
openModalBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

/************************************************************************************************************************************************/
function openModal() {
  functionsProject.showEl(studentsModal);
  window.addEventListener('click', widowEvent);
  window.addEventListener('keydown', keyListener);
}
function closeModal() {
  functionsProject.hideEl(studentsModal);
  window.removeEventListener('Click', widowEvent);
  window.removeEventListener('keydown', keyListener);
}
function widowEvent(eve) {
  if (eve.target === studentsModal) {
    closeModal();
  }
}
function keyListener(eve) {
  if (eve.key === 'Escape') {
    closeModal();
  }
}
/************************************************************************************************************************************************/