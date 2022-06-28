import './styles/style.scss';
import cinema from './assets/cinema.jpg';
import logo from './assets/logo.svg';

const logoIcon = document.getElementById('logo');
logoIcon.src = logo;

const cinemaImg = document.querySelectorAll('.cinema');
cinemaImg.forEach((image) => {
  image.src = cinema;
});

// Like Button
const unlikeButton = document.querySelector('.unlike');
const likeButton = document.querySelector('.like');
unlikeButton.addEventListener('click', () => {
  unlikeButton.classList.toggle('d-none');
  likeButton.classList.remove('d-none');
  likeButton.classList.toggle('active');
});

likeButton.addEventListener('click', () => {
  unlikeButton.classList.remove('d-none');
  likeButton.classList.add('d-none');
});