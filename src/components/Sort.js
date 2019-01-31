import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSortPicture } from '../store/action';
import { Redirect } from 'react-router-dom';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectVal: null
    };
  }

  handleChange(event) {
    const value = event.target.value;
    const redirectVal = '/pictures' + value;
    this.props.setSort(value);
    console.log('redirecting', redirectVal);
    this.setState({
      redirectVal
    });
  }

  render() {
    if (this.state.redirectVal) {
      this.setState({
        redirectVal: null
      });
      return <Redirect to={this.state.redirectVal} />;
    }

    return (
      <div>
        <select onChange={e => this.handleChange(e)}>
          <option value="_order=asc">A-Z</option>
          <option value="_order=desc">Z-A</option>
        </select>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSort: sort => {
      dispatch(fetchSortPicture(sort));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Sort);
