/* eslint-disable camelcase */
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const postComment = async (item_id, username, comment) => {
  await fetch(commentURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id, username, comment }),
  });
};

const addComment = () => {
  const modalDiv = document.querySelector('#exampleModal');
  modalDiv.addEventListener('click', () => {
  });
};
export default { postComment, addComment };