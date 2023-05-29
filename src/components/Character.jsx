import React, { Component } from 'react';
import Name from './Name';
import Quote from './Quote';
import Image from './Image';
import Delete from './Delete';

class Character extends Component {
  render() {
    const { character, quote, id, image, characterDirection, like } =
      this.props.item;
    const { onLikeToggle } = this.props;

    return (
      <div className="characterContainer">
        <Name
          character={character}
          onLikeToggle={onLikeToggle}
          id={id}
          like={like}
        />
        <div className={characterDirection}>
          <Quote quote={quote} />
          <Image image={image} />
        </div>

        <Delete delete={this.props.delete} id={this.props.id} />
      </div>
    );
  }
}

export default Character;
