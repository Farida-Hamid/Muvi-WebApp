const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const getLikes = async () => {
  const request = new Request(likesURL);
  const response = await fetch(request);
  const likesCount = await response.json();

  const moviesLikes = document.querySelectorAll('.count-likes');

  for (let i = 0; i < moviesLikes.length; i += 1) {
    if (moviesLikes[i].id === likesCount[i].item_id) {
      moviesLikes[i].textContent = likesCount[i].likes;
    }
  }
};

export default getLikes;