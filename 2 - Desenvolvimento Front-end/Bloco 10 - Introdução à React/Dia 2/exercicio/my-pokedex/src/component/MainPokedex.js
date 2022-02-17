import React from "react";
import pokemons from '../data';
import PokemonInfo from './PokemonInfo';
import PokemonPhoto from './PokemonPhoto';

class MainPokedex extends React.Component {
  render() {
    const allPokemons = pokemons.filter((pokemon) => pokemon.name !== 'Dragonair');
    return <section className="main">
      { allPokemons.map((pokemon, index) => {
        return(
          <div key = { index } className="pokemon-info">
            <PokemonInfo pokemon = { pokemon }/>
            <PokemonPhoto pokemon = { pokemon }/>
          </div>
        )     
      })}
    </section>
  }
}

export default MainPokedex