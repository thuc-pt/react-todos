import {combineReducers} from 'redux';
import tasks from './tasks';
import displayForm from './displayForm';
import taskEdit from './taskEdit';
import filterTask from './filterTask';
import searchTask from './searchTask';
import sort from './sort';

const MyReducer = combineReducers({
  tasks,
  displayForm,
  taskEdit,
  filterTask,
  searchTask,
  sort
});

export default MyReducer;