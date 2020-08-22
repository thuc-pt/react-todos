import * as types from '../constants/Types';

var randomString = () => {
  return Math.floor((1 + Math.random()) * 0x10000).toString().substring(1);
}
var createRandomID = () => {
  return randomString() + '-' + randomString() + '-' + randomString() + '-' + randomString();
}
var data = JSON.parse(localStorage.getItem('tasks'));
var initState = data ? data : [];
let index = -1;
var MyReducer = (state = initState, action) => {
  switch(action.type) {
    case types.LISTS:
      return state
    case types.SAVE_TASK:
      let newTask = {
        id: action.task.id,
        name: action.task.name,
        status: action.task.status
      }
      if (!newTask.id) {
        newTask.id = createRandomID();
        state = [newTask, ...state];
      } else {
        index = state.findIndex(task => {return task.id === newTask.id});
        state[index] = newTask;
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    case types.UPDATE_STATUS_TASK:
      index = state.findIndex(task => {return task.id === action.id});
      console.log(index)
      state[index] = {
        ...state[index],
        status: !state[index].status
      }
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state]
    case types.DELETE_TASK:
      index = state.findIndex(task => {return task.id === action.id});
      state.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state));
      return [...state];
    default: return state
  }
};

export default MyReducer;