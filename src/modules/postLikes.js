const likesURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PBhw11GTdXlueafWDmvL/likes';

const postLikes = async (itemID) => {
  const result = await fetch(likesURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: itemID,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  await result.text();
};

export default postLikes;