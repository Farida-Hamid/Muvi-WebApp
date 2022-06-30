/* eslint-disable camelcase */
const commentURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/comments';

const postComment = async (e) => {
  console.log("adding");
  e.preventDefault();
  const movieID = e.target;

  const name = document.getElementById('name').value;
  const addComment = document.getElementById('added-comment').value;

  if (name && addComment) {
    const result = await fetch(commentURL, {
      method: 'POST',
      body: JSON.stringify({
        item_id: `${movieID}`,
        username: `${name}`,
        comment: `${addComment}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    await result.text();
    const request = new Request(`${commentURL}?item_id=${movieID}`);
    const response = await fetch(request);
    const recieveComment = await response.json();
    console.log(recieveComment);

  }
}

export default postComment;