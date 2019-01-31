import React, { Component } from 'react';
import { getPictures } from '../server/api';
import { connect } from 'react-redux';

class Pictures extends Component {
  componentDidMount() {
    /* getPictures(this.props.match.params); */
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
        <div>{picture}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures
});
export default connect(mapStateToProps)(Pictures);