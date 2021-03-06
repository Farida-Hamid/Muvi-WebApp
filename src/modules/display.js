/* eslint-disable camelcase */

import popUP from './popUp.js';
import likeFeature from './likeButton.js';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const container = document.querySelector('#popular-section');

const getClassByRate = (vote) => {
  if (vote >= 7) {
    return 'green';
  } if (vote >= 5) {
    return 'orange';
  }
  return 'red';
};

const display = (movies) => {
  movies.forEach((movie) => {
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
          <button type="button" class="like-btn">
           <span class="icon">
              <i class="fa-regular fa-heart" id=${id}></i>
           </span>
          </button>
          <span class="${getClassByRate(vote_average)} span count-likes" id=${id}>
        </span>
  </div>
      `;
    container.appendChild(movieEl);
  });

  likeFeature();
  popUP(movies);
};

export default display;