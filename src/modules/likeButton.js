import postLikes from './postLikes.js';

const likeFeature = () => {
  const movieDiv = document.querySelectorAll('.movie');
  movieDiv.forEach((div) => {
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-heart')) {
        e.target.classList.replace('fa-regular', 'fa-solid');
        const movieID = e.target.id;
        postLikes(movieID);
      }
    });
  });
};

export default likeFeature;