import React, { Component } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Simpsons from './components/Simpsons';
import './App.css';

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );
    this.setState({ simpsons: data });
    console.log(this.state);
  }

  delete = (quote, character) => {
    const indexOf = this.state.simpsons.findIndex((char) => {
      return char.quote === quote && char.character === character;
    });
    const simpsons = [...this.state.simpsons];
    simpsons.splice(indexOf, 1);
    this.setState({ simpsons });
  };

  render() {
    console.log(this.state);

    const { simpsons } = this.state;

    if (!simpsons) return <Loading />;

    return (
      <>
        <h1> Total number of liked characters: </h1>
        <Simpsons simpsons={simpsons} delete={this.delete} />
      </>
    );
  }
}

export default App;
