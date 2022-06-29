/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
import popUP from './popUp.js';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';
let movieCounter = 0;

const container = document.querySelector('#popular-section');
const counter = document.querySelector('#count');

const display = (movies) => {
  movies.forEach((movie) => {
    movieCounter += 1;
    counter.innerHTML = `<p>We have ${movieCounter} movies 🎥 🍿</p>`;

    const {
      title, poster_path, vote_average, id,
    } = movie;
    const movieEl = document.createElement('div');
    movieEl.classList.add('movie');
    movieEl.id = (id);
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
          <h4>${title}</h4>
        </div>
  <div class="interact">
          <button type="button" class="btn btn-info comment" data-toggle="modal" data-target="#exampleModal">Comment<i class="bi bi-chat"></i></button>
          <span class="${getClassByRate(vote_average)} span">
          <i class="bi bi-heart unlike"></i>
          <i class="bi bi-heart-fill d-none like"></i>
          ${vote_average}
        </span>
  </div>
      `;
    container.appendChild(movieEl);
  });
  popUP(movies);
};

function getClassByRate(vote) {
  if (vote >= 7) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

export default display;