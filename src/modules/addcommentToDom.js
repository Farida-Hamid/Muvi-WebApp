import countComments from './commentCounter.js';

const addCommentToDom = (comments) => {
  countComments(comments).then((results) => {
    const counter = results;

    const displayCount = document.querySelector('.comments-counter');
    displayCount.innerHTML = `${counter} comments`;
  });

  const commentList = document.querySelector('.comments-container');
  commentList.innerHTML = '';
  comments.forEach((comment) => {
    commentList.innerHTML += `<li>${comment.creation_date}: ${comment.username}: ${comment.comment}</li>`;
  });
};
export default addCommentToDom;
