const container = document.querySelector('#main');

export const display = () => {
  console.log('called');

  container.innerHTML += `    <div class="movie">
  <img class="cinema" src="" alt="">
  <div class="movie-info">
    <h3>Movie Title</h3>
    <span class="green"><i class="bi bi-heart" id="unlike"></i>8.5</span>
  </div>
  <div class="overview">
    <h3>Overview</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia fugit nostrum voluptas voluptatum?
      Aut at saepe quis vero facere!</p>
  </div>
</div>`;
};