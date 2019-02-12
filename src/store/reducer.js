import { SORT_PICTURES, FETCH_SINGLE_PICTURE } from './action';

const initialState = {
  pictures: [],
  picture: []
};

function gallery(state = initialState, action) {
  switch (action.type) {
    case SORT_PICTURES:
      return { ...state, pictures: action.pic };
    case FETCH_SINGLE_PICTURE:
      return { ...state, picture: [action.single] };
    default:
      return state;
  }
}

export default gallery;
