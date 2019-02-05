import { getPictures } from '../server/api';
import Pictures from './Pictures';

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
  }
];

export default routes;
