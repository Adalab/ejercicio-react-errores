import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './App.css';

class App extends Component {
  render() {
    return (
      <main>
        <h1 className="main-title">Mi lista de pokemon</h1>
        <PokemonList pokemon={this.props.pokemon} />
      </main>
    );
  }
}

export default App;
