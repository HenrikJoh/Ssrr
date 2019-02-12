import { getPictures, singlePicture } from '../server/api';
import Pictures from './Pictures';
import SinglePicture from './SinglePicture';

const routes = [
  {
    path: '/',
    exact: true,
    component: Pictures,
    getInitialData: (path = '') => getPictures(path)
  },
  {
    path: '/sort/:id',
    component: Pictures,
    getInitialData: (path = '') => {
      return getPictures(path.split('/sort/pictures').pop());
    }
  },
  {
    path: '/single/:id',
    component: SinglePicture,
    getInitialData: () => {
      return singlePicture();
    }
  }
];

export default routes;
