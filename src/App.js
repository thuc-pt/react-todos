import React, {Component} from 'react';
import './App.scss';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    let {displayForm} = this.props;
    return (
      <div className="container mrg-top--25">
        <h3 className="text-center"><strong>Workflow management</strong></h3>
        <div className="row">
          {displayForm ? <div className="col-md-4 mrg-bottom--25"><TaskForm /></div> : null}
          <div className={displayForm ? 'col-md-8' : 'col-12'}>
            <Control />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayForm: state.displayForm
  }
};

export default connect(mapStateToProps, null)(App);
