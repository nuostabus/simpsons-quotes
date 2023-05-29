import React, { Component } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Simpsons from './components/Simpsons';
import './App.css';

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );

    //helps API data to have inique ID
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    this.setState({ simpsons: data });
  }

  onLikeToggle = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id; //finds an id of an element which was clicked on
    });
    const simpsons = [...this.state.simpsons];
    simpsons[indexOf].like = !simpsons[indexOf].like;

    console.log(simpsons);
    this.setState({ simpsons });
  };

  delete = (id) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.id === id;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    console.log(this.state);

    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>You deleted all Simpsons </p>;

    //calculate the total of likes
    let total = 0;
    simpsons.forEach((char) => {
      if (char.like) total++;
      console.log(total);
    });

    return (
      <>
        <h1> Total number of liked characters: {total}</h1>
        <Simpsons
          simpsons={simpsons}
          delete={this.delete}
          onLikeToggle={this.onLikeToggle}
        />
      </>
    );
  }
}

export default App;
