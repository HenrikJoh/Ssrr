import fetch from 'isomorphic-fetch';

const dbUrl = 'http://localhost:3000/pictures';

export function getPictures(url) {
  return fetch(dbUrl)
    .then(data => data.json())
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
}
