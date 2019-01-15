import React, { Component } from "react";
import * as pokemonData from "./data";
import PokemonList from "./PokemonList";
import "./App.css";

class App extends Component {
  constructor() {
    this.state = { pokemonData };
  }

  render() {
    return (
      <main>
        <h1 className="main-title">Mi lista de pokemon</h1>

        <PokemonList pokemon={this.state.pokemon.pokemonData} />
      </main>
    );
  }
}

export default App;
