import React from "react";

class PokemonPhoto extends React.Component {
  render() {
    return <img src = { this.props.pokemon.image } alt = { this.props.pokemon.name } ></img>
  }
}

export default PokemonPhoto