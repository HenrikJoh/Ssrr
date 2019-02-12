export const SORT_PICTURES = 'SORT_PICTURES';
export const FETCH_SINGLE_PICTURE = 'FETCH_SINGLE_PICTURE';

export function singlePic(single) {
  return {
    type: FETCH_SINGLE_PICTURE,
    single: single
  };
}

export function sortPictures(pic) {
  return {
    type: SORT_PICTURES,
    pic: pic
  };
}

/* export function fetchSinglePicture(single) {
  return dispatch => {
    return fetch('http://localhost:3000/pictures?id=' + single)
      .then(data => data.json())
      .then(response => {
        console.log('single', response);
        dispatch(singlePicture(response));
      })
      .catch(err => console.log(err));
  };
} */

export function fetchSortPicture(sort) {
  return dispatch => {
    return fetch('http://localhost:3000/pictures' + sort)
      .then(data => data.json())
      .then(response => {
        console.log('resp', response);
        dispatch(sortPictures(response));
      })
      .catch(err => console.log(err));
  };
}
