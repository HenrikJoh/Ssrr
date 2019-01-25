import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    console.log('App', this.props.pictures[0].id);
  }
  render() {
    return (
      <div>
        <h1>SSR gallery</h1>
        <p>Hejsan</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures
});

export default connect(mapStateToProps)(App);
