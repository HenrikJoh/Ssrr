import { SORT_PICTURES } from './action';

const initialState = {
  pictures: []
};

function gallery(state = initialState, action) {
  switch (action.type) {
    case SORT_PICTURES:
      return { ...state, pictures: action.pic };

    default:
      return state;
  }
}

export default gallery;
