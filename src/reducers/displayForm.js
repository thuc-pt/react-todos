import * as types from '../constants/Types';

var initState = false;

var MyReducer = (state = initState, action) => {
  switch(action.type) {
    case types.TOGGLE_FORM:
      return !state;
    case types.OPEN_FORM:
      return true;
    case types.CLOSE_FORM:
      return false;
    default:
      return state;
  }
};

export default MyReducer;