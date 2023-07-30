/************************************************************************************************************************************************/
const studentsModal = document.querySelector('#studentsModal');
const closeModalBtn = document.getElementById('closeModalBtn');
/************************************************************************************************************************************************/
studentsModal.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);
/************************************************************************************************************************************************/
function openModal() {
  functionsProject.showEl(modalFilmCard);
  window.addEventListener('click', widowEvent);
}
function closeModal() {
  functionsProject.hideEl(studentsModal);
  window.removeEventListener('Click', widowEvent);
}
function widowEvent(eve) {
  console.log(eve.target);
  if (eve.target === studentsModal) {
    closeModal();
  }
}
/************************************************************************************************************************************************/
