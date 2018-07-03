import React, { Component } from 'react';
import './PokemonCard.css';

class PokemonCard extends Component{
    render(){
        const {pok: pokemon} = this.props;
        return (
            <div className="card">
                <div className="card__photo" style={
                    {backgroundImage: `url(${pokemon.url})`}
                    }>
                </div>
                <h2 className="card__name">{pokemon.name}</h2>
                <ul className="card__type">
                    {pokemon.types.map(type => <li className="card__type--item" key={type}>{type}</li>)}
                </ul>
            </div>
        );
    }
}

export default PokemonCard;