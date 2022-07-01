import addCommentToDom from './addcommentToDom.js';
import countComments from './commentCounter.js';

const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const fetchComments = async (id) => {
  const request = new Request(`${commentURL}?item_id=${id}`);
  const response = await fetch(request);
  if (!response.ok) {
    return 0;
    // throw new Error('No comments added for this movie');
  }
  const recieveComment = await response.json();
  addCommentToDom(recieveComment);

  return countComments(recieveComment);
};

export default fetchComments;