import React, { Component } from 'react';
import './App.scss';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      displayForm: false,
      taskNew: false,
      taskEdit: null,
      filName: null,
      filStatus: -1,
      keyword: '',
      sortBy: '',
      sortValue: null,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      })
    }
  }

  randomString() {
    return Math.floor((1 + Math.random()) * 0x10000).toString().substring(1);
  }

  createRandomID() {
    return this.randomString() + '-' + this.randomString() + '-' + this.randomString() + '-' + this.randomString();
  }

  onToggleForm = () => {
    if (this.state.taskEdit) {
      this.setState({
        displayForm: true,
        taskNew: true,
        taskEdit: null
      });
    } else {
      this.setState({
        displayForm: !this.state.displayForm,
        taskNew: true,
        taskEdit: null
      });
    }
  }

  onSubmitForm = async(task) => {
    let newTasks;
    if (task.id === '') {
      task.id = this.createRandomID();
      newTasks = [task, ...this.state.tasks]
    } else {
      let {tasks} = this.state;
      let index = tasks.findIndex(item => {return item.id === task.id});
      if (index > -1) tasks[index] = task;
      newTasks = tasks;
    }
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    await this.setState({
      tasks: newTasks,
      taskEdit: null
    });
    this.onToggleForm();
  }

  onUpdateStatus = (id) => {
    let {tasks} = this.state;
    let index = tasks.findIndex(task => {return task.id === id});
    if (index > -1) {
      tasks[index].status = !tasks[index].status
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onDeleteTask = (id) => {
    let {tasks} = this.state;
    let index = tasks.findIndex(task => {return task.id === id});
    if (index > -1) {
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  onEditTask = (id) => {
    this.setState({
      displayForm: true
    });
    let {tasks} = this.state;
    let index = tasks.findIndex(task => {return task.id === id});
    if (index > -1) {
      this.setState({
        taskEdit: tasks[index]
      });
    }
  }

  onFilterData = (name, status) => {
    this.setState({
      filName: name,
      filStatus: status
    });
  }

  onSearchTask = (text) => {
    this.setState({
      keyword: text
    });
  }

  onSortTask = (key, value) => {
    this.setState({
      sortBy: key,
      sortValue: value
    });
  }

  onChangePage = (pageNumber) => {
    this.setState({
      pageActiving: pageNumber
    })
  }

  render() {
    let {tasks, displayForm, taskNew, taskEdit, filName, filStatus, keyword, sortBy, sortValue} = this.state
    if (filName) tasks = tasks.filter(task => task.name.toLowerCase().indexOf(filName.toLowerCase()) !== -1);
    if (keyword) tasks = tasks.filter(task => task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
    if (filStatus > -1) tasks = tasks.filter(task => task.status === (filStatus === 1 ? true : false));
    if (sortBy && sortValue) {
      if (sortBy === 'name') {
        tasks = tasks.sort((a, b) => {
          if (a.name > b.name) return sortValue
          else if (a.name < b.name) return -sortValue
          else return 0
        });
      } else {
        tasks = tasks.sort((a, b) => {
          if (a.status > b.status) return sortValue
          else if (a.status < b.status) return -sortValue
          else return 0
        });
      }
    }

    return (
      <div className="container mrg-top--25">
        <h3 className="text-center"><strong>Workflow management</strong></h3>
        <div className="row">
          {displayForm ? <div className="col-md-4 mrg-bottom--25">
            <TaskForm onListenClose={this.onToggleForm}
                      onListenSubmit={this.onSubmitForm}
                      taskNew={taskNew}
                      taskEdit={taskEdit} /></div> : ''}
          <div className={displayForm ? 'col-md-8' : 'col-12'}>
            <Control
                    onListenAdd={this.onToggleForm}
                    onListenSearch={this.onSearchTask}
                    onListenSort={this.onSortTask}
                    sortBy={sortBy}
                    sortValue={sortValue} />
            <TaskList tasks={tasks}
                      onListenUpdateStatus={this.onUpdateStatus}
                      onListenDelete={this.onDeleteTask}
                      onListenEdit={this.onEditTask}
                      onListenFilter={this.onFilterData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
