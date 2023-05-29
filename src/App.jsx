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
    console.log('getting data');
    this.setState({ simpsons: data });
  }

  delete = (index) => {
    const copy = [...this.state.simpsons];
    console.log(copy);
    copy.splice(index, 1);
    this.setState({ simpsons: copy });
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
