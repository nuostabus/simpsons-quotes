import React, { Component } from 'react';

class Delete extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.props.delete(this.props.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Delete;
