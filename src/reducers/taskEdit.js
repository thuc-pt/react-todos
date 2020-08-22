import * as types from '../constants/Types';

var initState = {
  id: '',
  name: '',
  status: false,
  errorName: false
};

var MyReducer = (state = initState, action) => {
  if (action.type === types.EDIT_TASK)
    return action.task;
  if (state.id)
    return initState
  return state;
};

export default MyReducer;