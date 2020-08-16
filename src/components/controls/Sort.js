import React, { Component } from 'react';
import ClassNames from 'classnames';

class Sort extends Component {
  onSortTask = (sortBy, sortValue) => {
    this.props.listProps.onListenSort(sortBy, sortValue)
  }

  render() {
    let {sortBy, sortValue} = this.props.listProps
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

export default Sort;