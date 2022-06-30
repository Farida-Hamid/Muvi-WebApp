import './styles/style.scss';
import logo from './assets/logo.svg';
import { getMovies, API_URL, SEARCH_API } from './getMovies.js';

getMovies(API_URL);
const logoIcon = document.getElementById('logo');
logoIcon.src = logo;

const form = document.getElementById('form');
const search = document.getElementById('search');
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);

    search.value = '';
  } else {
    window.location.reload();
  }
});
