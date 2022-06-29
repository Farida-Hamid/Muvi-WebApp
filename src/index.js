import './styles/style.scss';
import logo from './assets/logo.svg';
import { getMovies, API_URL } from './getMovies.js';

getMovies(API_URL);

const logoIcon = document.getElementById('logo');
logoIcon.src = logo;