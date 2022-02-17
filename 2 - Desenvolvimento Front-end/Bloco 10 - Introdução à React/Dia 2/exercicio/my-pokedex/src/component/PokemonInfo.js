import React from "react";

class PokemonInfo extends React.Component {
  render() {
    return (
      <div>
        <p><strong>Nome:</strong> { this.props.pokemon.name }</p>
        <p><strong>Tipo:</strong> { this.props.pokemon.type }</p>
        <p><strong>Peso:</strong> { `${this.props.pokemon.averageWeight.value} ${this.props.pokemon.averageWeight.measurementUnit}` }</p>
      </div>
    )
  }
}

export default PokemonInfo