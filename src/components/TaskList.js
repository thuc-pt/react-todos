import React, { Component } from 'react';
import TaskItem from './taskLists/TaskItem';
import Filter from './taskLists/Filter';

class TaskList extends Component {
  render() {
    let {tasks} = this.props;
    let elmTasks = tasks.map((task, index) => {
      return <TaskItem key={index} index={index} task={task} listProps={this.props} />
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
          <Filter listProps={this.props} />
        </thead>
        <tbody>
          {elmTasks}
        </tbody>
      </table>
    );
  }
}

export default TaskList;