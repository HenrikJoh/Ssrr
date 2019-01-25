export const FETCH_PICTURES = 'FETCH_PICTURES';

export function getPictures(pic) {
  return {
    type: FETCH_PICTURES,
    pic: pic
  };
}

/* export function fetchPictures(getpic) {
  return dispatch => {
    return fetch(getpic)
      .then(data => data.json())
      .then(response => {
        console.log('resp', response);
        dispatch(getPictures(response));
      })
      .catch(err => console.log(err));
  };
} */
