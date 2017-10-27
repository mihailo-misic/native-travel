import {DATA_FETCH_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  curItem: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return {...state, data: action.payload};

    default:
      return state;
  }
}