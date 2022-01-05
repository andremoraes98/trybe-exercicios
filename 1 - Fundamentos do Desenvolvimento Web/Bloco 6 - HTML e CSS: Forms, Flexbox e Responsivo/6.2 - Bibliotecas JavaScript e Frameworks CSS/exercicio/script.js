const date = document.querySelector('#Data');

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