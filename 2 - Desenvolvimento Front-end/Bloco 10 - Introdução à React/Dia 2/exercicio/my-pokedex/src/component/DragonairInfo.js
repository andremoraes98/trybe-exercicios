import React from "react";
import pokemons from '../data';
import PokemonInfo from './PokemonInfo';
import PokemonPhoto from './PokemonPhoto';

class DragonairInfo extends React.Component {
  render() {
    const dragonair = pokemons.filter((pokemon) => pokemon.name === 'Dragonair');
    return (
      <section className="main">
        <div key = { dragonair.name } className="pokemon-dragonair">
          <PokemonInfo pokemon = { dragonair[0] }/>
          <PokemonPhoto pokemon = { dragonair[0] }/>
        </div>
      </section>
    )

  }}

export default DragonairInfo