import './styles/style.scss';
import cinema from './assets/cinema.jpg';
import logo from './assets/logo.svg';
import { getMovies } from './getMovies';

getMovies();

const logoIcon = document.getElementById('logo');
logoIcon.src = logo;

const cinemaImg = document.querySelectorAll('.cinema');
cinemaImg.forEach((image) => {
  image.src = cinema;
});

const likeButton = document.querySelector('#unlike');
likeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('bi-heart')) {
    likeButton.classList.replace('bi-heart', 'bi-heart-fill');
  } else if (likeButton.contains('bi-heart-fill')) {
    likeButton.classList.replace('bi-heart-fill', 'bi-heart');
  }
});