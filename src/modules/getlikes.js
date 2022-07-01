const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const getLikes = async () => {
  const request = new Request(likesURL);
  const response = await fetch(request);
  const likesCount = await response.json();

  const moviesLikes = document.querySelectorAll('.count-likes');

  for (let i = 0; i < moviesLikes.length; i += 1) {
    let flag = false;
    for (let j = 0; j < likesCount.length; j += 1) {
      if (moviesLikes[i].id === likesCount[j].item_id) {
        flag = true;
        moviesLikes[i].textContent = likesCount[j].likes;
      }
    }
    if (!flag) {
      moviesLikes[i].textContent = 0;
    }
  }
};

export default getLikes;