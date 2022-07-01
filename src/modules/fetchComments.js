import addCommentToDom from './addcommentToDom.js';
import countComments from './commentCounter.js';

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  const displayCount = document.querySelector('.comments-counter');

  // display 0 comments if no comments were found
  if (!response.ok) {
    displayCount.innerHTML = `0 comments`;
  }
  const recieveComment = await response.json();
  addCommentToDom(recieveComment);

  // display number of comments
  countComments(recieveComment).then((results) => {
    if (!results.ok) {
      displayCount.innerHTML = `${results} comments`;
    }
    
  });
};

export default fetchComments;