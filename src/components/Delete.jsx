import React, { Component } from 'react';

class Delete extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.delete}> Delete</button>{' '}
        {/*adding* an onClick function and passing props*/}
      </div>
    );
  }
}

export default Delete;
