//AJOUT DU BOUTON//
const startAddMovieModal = document.querySelector('header button');
//AJOUT DU FORMULAIRE LORS DU CLIC SUR BOUTON//
const addMovieModal = document.getElementById('add-modal');

//const backdrop = document.getElementById ('backdrop');

//startAddMovieModal.addEventListener('click', openModal);

// function openModal() {
//     addMovieModal.style.display = 'block';
//     //addMovieModal.style.backgroundColor = 'red'; =>changer couleur
//     backdrop.style.display = 'block';


// backdrop.addEventListener('click', closeModal);

// function closeModal() {
//     addMovieModal.style.display = 'none';
//     backdrop.style.display = 'none';
// }
const toggleMovieVisible = () => {
    addMovieModal.classList.toggle('visible');
}
startAddMovieModal.addEventListener('click', toggleMovieVisible);