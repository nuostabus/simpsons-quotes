import React, { Component } from 'react';
import Character from './Character';

class Simpsons extends Component {
  render() {
    const { simpsons } = this.props;

    return (
      <>
        {simpsons.map((item) => {
          return (
            <Character
              onClick={this.charIndexViewer}
              item={item}
              key={item.quote + item.character}
              delete={this.props.delete}
            />
          );
        })}
      </>
    );
  }
}

export default Simpsons;
