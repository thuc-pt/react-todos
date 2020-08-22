import React, { Component } from 'react';
import AddTask from './controls/AddTask';
import Search from './controls/Search';
import Sort from './controls/Sort';

class Control extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-12 mrg-bottom--25">
          <AddTask />
        </div>
        <div className="col-md-8 mrg-bottom--25">
          <Search />
        </div>
        <div className="col-md-4 mrg-bottom--25">
          <Sort />
        </div>
      </div>
    );
  }
}

export default Control;
