import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  onChangeKeyWord = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    this.setState({
      [key]: value
    });
  }

  onSearchTask = (event) => {
    event.preventDefault();
    this.props.onSearchTask(this.state.keyword);
  }

  render() {
    let {keyword} = this.state;
    return (
      <form onSubmit={this.onSearchTask}>
        <div className="input-group">
          <input type="text" name='keyword' placeholder="Search for task names" className="form-control" value={keyword} onChange={this.onChangeKeyWord} />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary"><i className="fab fa-searchengin mrg-right--5"></i>Search</button>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchTask: (keyword) => {
      dispatch(actions.seachTask(keyword))
    }
  }
};

export default connect(null, mapDispatchToProps)(Search);