import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: -1
    }
  }

  onChangeFilter = async(event) => {
    let key = event.target.name;
    let value = event.target.value;
    await this.setState({[key]: value});
    let filter = {
      name: this.state.name,
      status: parseInt(this.state.status)
    }
    this.props.onFilterTask(filter);
  }

  render() {
    let {name, status} = this.state;
    return (
      <tr className="text-center">
        <td></td>
        <td>
          <input type="text" className="form-control" name="name" value={name} onChange={this.onChangeFilter} />
        </td>
        <td>
          <select className="form-control" name="status" value={status} onChange={this.onChangeFilter}>
            <option value={-1}>All</option>
            <option value={0}>Open</option>
            <option value={1}>Done</option>
          </select>
        </td>
        <td></td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterTask: (filter) => {
      dispatch(actions.filterTask(filter))
    }
  }
};

export default connect(null, mapDispatchToProps)(Filter);