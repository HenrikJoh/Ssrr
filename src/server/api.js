import fetch from 'isomorphic-fetch';

const dbUrl = 'http://localhost:3000/pictures';

export function getPictures() {
  return fetch(dbUrl)
    .then(data => data.json())
    .then(result => {
      console.log(result[0].id);
      return result;
    })
    .catch(err => console.log(err));
}
