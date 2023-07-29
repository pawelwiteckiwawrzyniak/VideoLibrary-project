// Pobierz referencje do przycisku otwierającego okno modalne i do samego okna modalnego
const openModalBtn = document.getElementById('openModalBtn');
const studentsModal = document.getElementById('studentsModal');

// Dodaj obsługę kliknięcia do przycisku otwierającego
openModalBtn.addEventListener('click', function () {
  studentsModal.style.display = 'block'; // Pokaż okno modalne
});

// Pobierz referencję do przycisku zamykającego okno modalne
const closeModalBtn = document.getElementById('closeModalBtn');

// Dodaj obsługę kliknięcia do przycisku zamykającego
closeModalBtn.addEventListener('click', function () {
  studentsModal.style.display = 'none'; // Ukryj okno modalne
});
window.addEventListener('click', function (event) {
  if (event.target === studentsModal) {
    studentsModal.style.display = 'none';
  }
});
