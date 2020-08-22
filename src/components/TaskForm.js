import React, {Component} from 'react';
import ClassNames from 'classnames';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      status: false,
      errorName: false
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.taskEdit.id !== prevState.id) {
      return {
        id: nextProps.taskEdit.id,
        name: nextProps.taskEdit.name,
        status: nextProps.taskEdit.status,
        errorName: false
      };
    }
    return null;
  }

  onCloseForm = () => {
    this.props.onCloseForm();
  }

  onChangeValue = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    if (key === 'name') {
      this.setState({
        hasErrorName: value === '' ? true : false
      });
    }
    if (key === 'status') value === 'true' ? value = true : value = false;
    this.setState({
      [key]: value
    });
  }

  onSubmitForm = (event) => {
    event.preventDefault();
    if (this.state.name === '') {
      this.setState({
        errorName: true
      });
    } else {
      this.props.onSaveTask(this.state);
      this.onCloseForm();
    }
  }

  render() {
    let {id, name, status, errorName} = this.state;
    return (
      <div className="card">
        <div className="card-header bg-warning form-title">
          <div><strong>{id === '' ? 'Add New Task' : 'Edit task'}</strong></div>
          <div><i className="fas fa-times-circle" onClick={this.onCloseForm}></i></div>
        </div>
        <div className="card-body">
          <form onSubmit={this.onSubmitForm}>
            <div className="form-group">
              <label className="mrg-right--5">Task name</label><span className="error">{errorName ? 'Please enter' : ''}</span>
              <input type="text" name="name" value={name} onChange={this.onChangeValue} className={ClassNames('form-control', {error: errorName})} />
            </div>
            <div className="form-group">
              <label>Task status</label>
              <select name="status" value={status} onChange={this.onChangeValue} className="form-control">
                <option value={false}>Open</option>
                <option value={true}>Done</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-success mrg-right--5"><i className="far fa-save mrg-right--5"></i>Save</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEdit: state.taskEdit
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSaveTask: (task) => {
      dispatch(actions.saveTask(task))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);