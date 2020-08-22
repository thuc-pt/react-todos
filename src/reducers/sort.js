import * as types from '../constants/Types';

var initState = {
  sortBy: null,
  sortValue: null
};

var MyReducer = (state = initState, action) => {
  if (action.type === types.SORT)
    return action.sort;
  return state;
};

export default MyReducer;