import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPictures } from './store/action';

const dbUrl = 'http://localhost:3000/pictures';
class App extends Component {
  componentDidMount() {
    this.props.getPicture(dbUrl);
    console.log('App', this.props.pictures);
  }
  render() {
    let picture = this.props.pictures.map(pic => {
      return (
        <div key={pic.id}>
          <p>{pic.title}</p>
          <img src={pic.imgUrl} alt="pic.title" />
        </div>
      );
    });
    return (
      <div>
        <h1>SSR gallery</h1>
        <p>Hejsan</p>
        {picture}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures
});

const mapDispatchToProps = dispatch => {
  return {
    getPicture: getpic => {
      dispatch(fetchPictures(getpic));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
