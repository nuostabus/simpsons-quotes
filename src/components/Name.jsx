import React, { Component } from 'react';

class Name extends Component {
  render() {
    const { character, onLikeToggle, id, like } = this.props;
    return (
      <div>
        <h1>{character}</h1>
        <button
          onClick={() => {
            onLikeToggle(id);
          }}
        >
          {like ? 'Not liked' : 'Liked'}
        </button>
      </div>
    );
  }
}

export default Name;
