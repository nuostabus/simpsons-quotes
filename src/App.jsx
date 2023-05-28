import React, { Component } from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import Data from './components/Data';

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      ` https://thesimpsonsquoteapi.glitch.me/quotes?count=5`
    );
    this.setState({ data });
  }

  onDelete = (index) => {
    const copy = [...this.state.data];
    copy.splice(index, 1);
    this.setState({ data: copy });
  };

  render() {
    if (!this.state.data) return <Loading />;

    return <Data data={this.state.data} onDelete={this.onDelete} />;
  }
}

export default App;
