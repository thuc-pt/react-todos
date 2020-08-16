import React, { Component } from 'react';
import ClassNames from 'classnames'

class TaskItem extends Component {
  onUpdateStatus(task) {
    this.props.listProps.onListenUpdateStatus(task.id)
  }

  onDeleteTask(task) {
    this.props.listProps.onListenDelete(task.id)
  }

  onEditTask = (task) => {
    this.props.listProps.onListenEdit(task.id)
  }

  render() {
    let {index, task} = this.props;
    return (
      <tr className="text-center">
        <td>{index + 1}</td>
        <td>{task.name}</td>
        <td>
          <span className={ClassNames("badge badge-pill badge-status", task.status ? 'badge-success' : 'badge-warning')} onClick={() => {this.onUpdateStatus(task)}}>
            {task.status ? 'Done' : 'Open'}
          </span>
        </td>
        <td>
          <button className="btn btn-warning mrg-right--5" onClick={() => {this.onEditTask(task)}}><i className="fas fa-edit mrg-right--5"></i>Edit</button>
          <button className="btn btn-danger" onClick={() => {this.onDeleteTask(task)}}><i className="fas fa-trash-alt mrg-right--5"></i>Delete</button>
        </td>
      </tr>
    );
  }
}

export default TaskItem;