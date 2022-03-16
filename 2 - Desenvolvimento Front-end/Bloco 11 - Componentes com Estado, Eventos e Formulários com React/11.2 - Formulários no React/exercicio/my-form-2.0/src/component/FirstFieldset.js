import React from "react";

class FirstFieldset extends React.Component {
  render() {
    const statesBR = ['', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
    return (
      <fieldset className="forms">
        <label className="input">
          Nome:
          <input name="name" type="text" />
        </label>

        <label className="input">
          Email:
          <input name="email" type="text" />
        </label>

        <label className="input">
          CPF:
          <input name="cpf" type="text" />
        </label>

        <label className="input">
          Endereço:
          <input name="address" type="text" />
        </label>

        <label className="input">
          Cidade:
          <input  name="city" type="text" />
        </label>

        <label className="input">
          Estados: 
          <select name="state">
            { statesBR.map((state) => <option value={state} key={ state }>{state}</option>) }
          </select>
        </label>

        <div className="input">
          <label className="input">
            <input name="type-of-house" type="radio" />
            Apartamento
          </label>

          <label  className="input">
            <input name="type-of-house" type="radio" />
            Casa
          </label>
        </div>
      </fieldset>
    )
  }
}

export default FirstFieldset;