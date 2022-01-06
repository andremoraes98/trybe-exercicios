const date = document.querySelector('#Data');
const validation = new JustValidate('#form');
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
  .addRequiredGroup('#tipo-de-moradia-radio-group')
  .addField('#Resumo', [
    {
      rule: 'required',
      errorMessage: 'Resumo do currículo é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 1000,
    },
  ])
  .addField('#Cargo', [
    {
      rule: 'required',
      errorMessage: 'Cargo é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 40,
    },
  ])
  .addField('#Descricao', [
    {
      rule: 'required',
      errorMessage: 'Descrição do cargo é obrigatório.',
    },
    {
      rule: 'maxLength',
      value: 500,
    },
  ])
  .addField('#Data', [
    {
      rule: 'required',
      errorMessage: 'Data é obrigatório.',
    },
  ])