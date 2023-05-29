import React, { Component } from 'react';

class Image extends Component {
  render() {
    return (
      <img
        className={this.props.like ? 'liked' : 'notLiked'}
        src={this.props.image}
        alt={this.props.character}
      ></img>
    );
  }
}

export default Image;
