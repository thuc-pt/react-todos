import React, {Component} from 'react';
import TaskItem from './taskLists/TaskItem';
import Filter from './taskLists/Filter';
import {connect} from 'react-redux';

class TaskList extends Component {
  render() {
    let {tasks, filterTask, keyword} = this.props;
    let {sortBy, sortValue} = this.props.sort;
    if (filterTask.name) tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filterTask.name.toLowerCase()) !== -1);
    if (filterTask.status > -1) tasks = tasks.filter(task => task.status === (filterTask.status === 1 ? true : false));
    if (keyword) tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    if (sortBy && sortValue) {
      if (sortBy === 'name') {
        tasks = tasks.sort((a, b) => {
          if (a.name > b.name) return sortValue
          else if (a.name < b.name) return -sortValue
          else return 0
        });
      } else {
        tasks = tasks.sort((a, b) => {
          if (a.status > b.status) return sortValue
          else if (a.status < b.status) return -sortValue
          else return 0
        });
      }
    }
    let elmTasks = tasks.map((task, index) => {
      return <TaskItem key={index} index={index} task={task} />
    })
    return (
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>No</th>
            <th>Task name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          <Filter />
        </thead>
        <tbody>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTask: state.filterTask,
    keyword: state.searchTask,
    sort: state.sort
  }
};

export default connect(mapStateToProps, null)(TaskList);