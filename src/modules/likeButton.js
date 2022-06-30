const likeFeature = () => {
  const movieDiv = document.querySelectorAll('.movie');
  movieDiv.forEach((div) => {
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('fa-heart')) {
        e.target.classList.toggle('fa-solid');
      }
    });
  });
};
export default likeFeature;