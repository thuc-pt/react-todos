import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';


class AddTask extends Component {
  onToggleForm = () => {
    if (this.props.taskEdit.id)
      this.props.onClearForm({id: '', name: '', status: false});
    else
      this.props.onToggleForm();
  }

  render() {
    return <button className="btn btn-success" onClick={this.onToggleForm}><i className="far fa-plus-square mrg-right--5"></i>Add new task</button>
  }
}

const mapStateToProps = (state) => {
  return {
    taskEdit: state.taskEdit
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onClearForm: (task) => {
      dispatch(actions.editTask(task))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);