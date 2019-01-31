export const FETCH_PICTURES = 'FETCH_PICTURES';
export const SORT_PICTURES = 'SORT_PICTURES';

export function sortPictures(pic) {
  return {
    type: SORT_PICTURES,
    pic: pic
  };
}

export function fetchSortPicture(sort) {
  return dispatch => {
    return fetch('http://localhost:3000/pictures?_sort=title&' + sort)
      .then(data => data.json())
      .then(response => {
        console.log('resp', response);
        dispatch(sortPictures(response));
      })
      .catch(err => console.log(err));
  };
}
