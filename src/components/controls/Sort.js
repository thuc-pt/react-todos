import React, {Component} from 'react';
import ClassNames from 'classnames';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Sort extends Component {
  onSortTask = (sortBy, sortValue) => {
    this.props.onSortTask({sortBy: sortBy, sortValue: sortValue})
  }

  render() {
    let {sortBy, sortValue} = this.props.sort
    return (
      <div className="dropdown">
        <button type="button" className="btn btn-primary" data-toggle="dropdown">
          Sort by<i className="far fa-caret-square-down mrg-left--5"></i>
        </button>
        <div className="dropdown-menu menu-sorts">
          <span className={ClassNames('dropdown-item', {active: sortBy === 'name' && sortValue === 1})} onClick={() => {this.onSortTask('name', 1)}}>
            <i className="fas fa-sort-alpha-down mrg-right--5"></i>Task name A - Z
          </span>
          <span className={ClassNames('dropdown-item', {active: sortBy === 'name' && sortValue === -1})} onClick={() => {this.onSortTask('name', -1)}}>
            <i className="fas fa-sort-alpha-down-alt mrg-right--5"></i>Task name Z - A
          </span>
          <div className="dropdown-divider"></div>
          <span className={ClassNames('dropdown-item', {active: sortBy === 'status' && sortValue === 1})} onClick={() => {this.onSortTask('status', 1)}}>
            Task status OPEN
          </span>
          <span className={ClassNames('dropdown-item', {active: sortBy === 'status' && sortValue === -1})} onClick={() => {this.onSortTask('status', -1)}}>
            Task status DONE
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSortTask: (sort) => {
      dispatch(actions.sortTask(sort))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);