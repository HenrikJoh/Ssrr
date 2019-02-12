import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sort from './Sort';
import { Link } from 'react-router-dom';

class Pictures extends Component {
  render() {
    const params = new URLSearchParams(this.props.location.search);
    const searchParams = params.get('_order');

    let picture = this.props.pictures.map(pic => {
      return (
        <div key={pic.id}>
          <p>{pic.title}</p>
          <Link to={'/single/pictures?id=' + pic.id}>
            <img src={pic.imgUrl} alt={pic.title} />
          </Link>
        </div>
      );
    });
    return (
      <div className="picture_container">
        <div className="header_title">
          <h1>SSR gallery</h1>
        </div>
        <Sort sorting={searchParams} />
        <div>{picture}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pictures: state.pictures
});

export default connect(mapStateToProps)(Pictures);
