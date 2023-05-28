import React, { Component } from 'react';

class Data extends Component {
  render() {
    return (
      <ol>
        {this.props.data.map((item, index) => {
          return (
            <li
              onClick={() => {
                this.props.onDelete(index);
              }}
              key={item.quote + item.character}
            >
              {item.character}{' '}
            </li>
          );
        })}
      </ol>
    );
  }
}

export default Data;
