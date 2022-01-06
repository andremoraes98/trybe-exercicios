const date = document.querySelector('#Data');
const statesList = document.querySelector('#Estado');
const statesBR = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];

for (let index = 0; index < statesBR.length; index += 1) {
  const options = document.createElement('option');
  options.innerHTML = statesBR[index];
  options.value = statesBR[index];
  statesList.appendChild(options);
}

date.DatePickerX.init({
  format: 'dd/mm/yyyy'
});

const validation = new JustValidate('#form');

validation
  .addField('#Nome', [
    {
      rule: 'required',
      errorMessage: 'Nome é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#E-mail', [
    {
      rule: 'required',
      errorMessage: 'E-mail é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 50,
    },
  ])
  .addField('#CPF', [
    {
      rule: 'required',
      errorMessage: 'CPF é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 11,
    },
  ])
  .addField('#Endereço', [
    {
      rule: 'required',
      errorMessage: 'Endereço é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 200,
    },
  ])
  .addField('#Cidade', [
    {
      rule: 'required',
      errorMessage: 'Cidade é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 28,
    },
  ])
  .addField('#Estado', [
    {
      rule: 'required',
      errorMessage: 'Estado é obrigatório.',
    },
  ])
  .addField('#Estado', [
    {
      rule: 'required',
      errorMessage: 'Estado é obrigatório.',
    },
  ])
  .addRequiredGroup('#tipo-de-moradia-radio-group')