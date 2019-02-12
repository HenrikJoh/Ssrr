import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singlePic } from '../store/action';
// import './style.css';

class SinglePicture extends Component {
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    const searchParams = params.get('id');
    const pictureIndex = this.props.pictures.find(i => {
      return i.id === +searchParams;
    });
    this.props.singlePic(pictureIndex);
  }

  render() {
    if (!this.props.picture) {
      return <p>loading</p>;
    }
    const singlePicture = this.props.picture.map(pic => {
      return (
        <div key={pic.id} className="single_product">
          <p>{pic.title}</p>
          <img src={pic.imgUrl} alt={pic.title} />
        </div>
      );
    });

    return (
      <div className="backdrop">
        <div className="single_container">
          {singlePicture}
          <p>Ny sida hehe</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  picture: state.picture,
  pictures: state.pictures
});

const mapDispatchToState = dispatch => {
  return {
    singlePic: single => {
      dispatch(singlePic(single));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToState
)(SinglePicture);
