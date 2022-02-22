import React from "react";

class SecondFieldset extends React.Component {
  render() {
    return (
      <fieldset className="forms">
        <label>
          Resumo do currículo:
          <textarea className="input" name="cv" />
        </label>

        <label>
          Cargo:
          <textarea className="input" name="cargo" />
        </label>

        <label>
          Descrição do cargo:
          <input type="text" className="input" name="cargo" />
        </label>
      </fieldset>
    )
  }
}

export default SecondFieldset