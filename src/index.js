import './styles/style.scss';
import cinema from './assets/cinema.jpg';
import logo from './assets/logo.svg';

const logoIcon = document.getElementById('logo');
logoIcon.src = logo;

const cinemaImg = document.querySelectorAll('.cinema');
cinemaImg.forEach((image) => {
  image.src = cinema;
});