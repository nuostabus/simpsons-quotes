import React, { Component } from 'react';
import Character from './Character';

class Simpsons extends Component {
  render() {
    const { simpsons, onLikeToggle } = this.props;
    return (
      <>
        {simpsons.map((item) => {
          return (
            <Character
              item={item}
              key={item.id}
              id={item.id}
              delete={this.props.delete}
              onLikeToggle={onLikeToggle}
              like={item.like}
            />
          );
        })}
      </>
    );
  }
}

export default Simpsons;
