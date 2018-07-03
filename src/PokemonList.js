import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

class PokemonList extends Component{
    render(){
        return (
            <section>
                <ul className="pokemon-list">
                {
                    this.props.pokemon.map(pok =>
                        <li key={pok.name}><PokemonCard pok={pok} /></li>
                    )
                }
                </ul>
            </section>
        );
    }
}

export default PokemonList;