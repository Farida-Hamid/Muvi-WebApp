/* eslint-disable camelcase */
/* eslint-disable no-use-before-define */
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const container = document.querySelector('#main');
const movieEl = document.createElement('div');
movieEl.classList.add('movie');

const display = (movies) => {
  movies.forEach((movie) => {
    const {
      title, poster_path, vote_average, overview,
    } = movie;
    movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
      <h3>Overview</h3>
      ${overview}
    </div>
    `;
    container.appendChild(movieEl);
  });
};

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

export default display;