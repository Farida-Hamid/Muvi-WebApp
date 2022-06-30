/* eslint-disable camelcase */
import postComment from './addComment.js';
import fetchComments from './fetchComments.js';

const IMG_PATH = 'https://image.tmdb.org/t/p/w1280/';

const popUP = (movies) => {
  const commentButton = document.querySelectorAll('.comment');
  commentButton.forEach((button) => {
    button.addEventListener('click', () => {
      const movieDiv = button.closest('.movie');
      movies.forEach((movie) => {
        if (movie.id === Number(movieDiv.id)) {
          const {
            title, poster_path, overview, id,
          } = movie;
          const modalPopUp = `
          <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <img src="${IMG_PATH + poster_path}" alt="${title}" class="modal-img">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <h3 class="text-center">${title}</h3>
            .<div class="text-center">
              <p>${overview}</p>
            </div>
            <ul class="comments-container">
            </ul>
            <form class="form-group form-control p-4 comment-form">
              <input type="text" placeholder="Your name" class="form-group form-control" id="name">
              <textarea class="form-control form-group" placeholder="Your Comment" style="height: 120px;" id="added-comment"></textarea>
              <button type="button" class="add-comment btn btn-info" id=${id}>Comment</button>
            </form>
          </div>
        </div>
      </div>`;
          document.querySelector('#exampleModal').innerHTML = modalPopUp;
          fetchComments(id);
          const submitButton = document.querySelector('.add-comment');
          submitButton.addEventListener('click', postComment);
        }
      });
    });
  });
};

export default popUP;