import React, { Component } from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filName: '',
      filStatus: -1
    }
  }

  onChangeFilter = async(event) => {
    let key = event.target.name;
    let value = event.target.value;
    await this.setState({
      [key]: value
    });
    this.props.listProps.onListenFilter(this.state.filName, parseInt(this.state.filStatus));
  }

  render() {
    let {filName, filStatus} = this.state;
    return (
      <tr className="text-center">
        <td></td>
        <td>
          <input type="text" className="form-control" name="filName" value={filName} onChange={this.onChangeFilter} />
        </td>
        <td>
          <select className="form-control" name="filStatus" value={filStatus} onChange={this.onChangeFilter}>
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

export default Filter;