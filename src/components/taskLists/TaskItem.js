import React, {Component} from 'react';
import ClassNames from 'classnames';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class TaskItem extends Component {
  onUpdateStatus(task) {
    this.props.onUpdateStatus(task.id)
  }

  onDeleteTask(task) {
    this.props.onDeleteTask(task.id);
    this.props.onCloseForm();
  }

  onEditTask = (task) => {
    this.props.onOpenForm();
    this.props.onEditTask(task);
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

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatusTask(id))
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
};

export default connect(null, mapDispatchToProps)(TaskItem);