import React, { Component } from 'react';

class AddTask extends Component {
  onToggleForm = () => {
    this.props.listProps.onListenAdd()
  }

  render() {
    return <button className="btn btn-success" onClick={this.onToggleForm}><i className="far fa-plus-square mrg-right--5"></i>Add new task</button>
  }
}

export default AddTask;