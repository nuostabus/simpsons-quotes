import React, { Component } from 'react';

class Delete extends Component {
  render() {
    return (
      <div>
        {/* <button onClick={this.props.delete}> Delete</button>{' '} */}
        <button
          onClick={() => {
            this.props.delete(this.props.quote, this.props.character);
          }}
        >
          Delete{' '}
        </button>
      </div>
    );
  }
}

export default Delete;
