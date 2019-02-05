import fetch from 'isomorphic-fetch';

export function getPictures(url) {
  console.log('api', url);
  return fetch('http://localhost:3000/pictures' + url)
    .then(data => data.json())
    .then(result => {
      return result;
    })
    .catch(err => console.log(err));
}
