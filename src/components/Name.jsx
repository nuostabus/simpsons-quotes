import React, { Component } from 'react';

class Name extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.character}</h1>
        <button onClick={this.props.onLikeToggle}>
          {this.props.like ? 'Liked' : 'Not liked'}
        </button>
      </div>
    );
  }
}

export default Name;
