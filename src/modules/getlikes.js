const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const getLikes = async () => {
  const request = new Request(likesURL);
  const response = await fetch(request);
  const likesCount = await response.json();
  // console.log('likesCount = ', likesCount);

  const moviesLikes = document.querySelectorAll('.count-likes');
  // console.log('moviesLikes = ', moviesLikes, "len =", moviesLikes.length);

  for (let i = 0; i < moviesLikes.length; i += 1) {
    console.log('searching for movie', moviesLikes[i].id)
    let flag = false;
    for (let j = 0; j < likesCount.length; j += 1) {
      if(moviesLikes[i].id === likesCount[j].item_id){
        console.log(i, likesCount[j].item_id, likesCount[j].likes);
        flag = true;
        moviesLikes[i].textContent = likesCount[j].likes;
      }

      // else {
      //   console.log("no likes", i);
      // }
    }
    if(!flag){
      moviesLikes[i].textContent = 0;
      console.log("no likes", moviesLikes[i].textContent);
    }
    // if (moviesLikes[i].id === likesCount[i].item_id) {
    //   
    // }
  }
};

export default getLikes;