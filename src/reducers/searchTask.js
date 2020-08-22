import * as types from '../constants/Types';

var initState = '';

var MyReducer = (state = initState, action) => {
  if (action.type === types.SEARCH)
    return action.keyword;
  return state;
};

export default MyReducer;