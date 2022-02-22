import React from "react";

class Forms extends React.Component {
  constructor() {
    super()

    this.state = {
      estados: '',
      nome: '',
      obs: '',
      vaiComparecer: false,
    }

    this.changeValue = this.changeValue.bind(this)
  }

  changeValue({ target }) {
    console.log(target.name)
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <label>
          Observação:
          <textarea value={this.state.obs} onChange={this.changeValue} name="obs"/>
        </label>

        <label>
          Estado:
          <select name='estados' value={this.state.estados} onChange={this.changeValue}>
            <option value=""></option>
            <option value="bahia">Bahia</option>
            <option value="ceara">Ceará</option>
            <option value="rio grande do norte">Rio grande do Norte</option>
          </select>
        </label>

        <label>
          Nome:
          <input name='nome' value={this.state.nome} onChange={this.changeValue} type='text' />
        </label>

        <label>
          Comparecerá?
          <input name="vaiComparecer" type="checkbox" value={this.state.vaiComparecer} onChange={this.changeValue}/>
        </label>

        <input type='submit' />
      </div>
    )
  }
}

export default Forms