import React from "react";

class Forms extends React.Component {
  constructor() {
    super()

    this.state = {
      estados: '',
      nome: '',
      obs: '',
    }

    this.changeState = this.changeState.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changeObs = this.changeObs.bind(this)
  }

  changeState(event) {
    this.setState({ estados: event.target.value });
  }

  changeName(event) {
    this.setState({ nome: event.target.value });
  }

  changeObs(event) {
    this.setState({ obs: event.target.value });
  }

  render() {
    return (
      <div>
        <label>
          Observação:
          <textarea value={this.state.obs} onChange={this.changeObs} name="obs"/>
        </label>

        <label>
          Estado:
          <select value={this.state.estados} onChange={this.changeState}>
            <option value=""></option>
            <option value="bahia">Bahia</option>
            <option value="ceara">Ceará</option>
            <option value="rio grande do norte">Rio grande do Norte</option>
          </select>
        </label>

        <label>
          Nome:
          <input value={this.state.nome} onChange={this.changeName} type='text' />
        </label>
        <input type='submit' />
      </div>
    )
  }
}

export default Forms