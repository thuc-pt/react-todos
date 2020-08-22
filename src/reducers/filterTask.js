import * as types from '../constants/Types';

var initState = {
  name: '',
  status: -1
};

var MyReducer = (state = initState, action) => {
  if (action.type === types.FILTER_TABLE)
    return action.filter;
  return state;
};

export default MyReducer;