import _ from 'lodash';

import {DATA_CLEAR, DATA_FETCH_SUCCESS, DATA_SORT_NAME, DATA_SORT_POP} from "../actions/types";

const INITIAL_STATE = {
  data: [],
  curItem: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DATA_FETCH_SUCCESS:
      return {...state, data: action.payload};
    case DATA_CLEAR:
      return {...state, ...INITIAL_STATE};
    case DATA_SORT_POP:
      const sortedDataPop = _.sortBy(state.data, ['pop']).reverse();
      return {...state, data: sortedDataPop};
    case DATA_SORT_NAME:
      const sortedDataName = _.sortBy(state.data, ['name']);
      return {...state, data: sortedDataName};

    default:
      return state;
  }
}