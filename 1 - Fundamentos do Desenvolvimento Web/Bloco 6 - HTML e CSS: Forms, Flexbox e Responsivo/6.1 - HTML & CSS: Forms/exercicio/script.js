const statesList = document.querySelector('#Estado');
const statesBR = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal'];
const sendButton = document.querySelector('#send');
const resetButton = document.querySelector('#reset');
const input = document.querySelectorAll('input');

for (let index = 0; index < statesBR.length; index += 1) {
  const options = document.createElement('option');
  options.innerHTML = statesBR[index];
  options.value = statesBR[index];
  statesList.appendChild(options);
}

sendButton.addEventListener('click', validDados);

function validDados() {
  let dadosValidos = 0;
  let dadosInvalidos = '';
  event.preventDefault();
  for (let index = 0; index < input.length; index += 1) {
    if (input[index].value !== '') {
      dadosValidos += 1;
    } else {
      dadosInvalidos += input[index].id + ' ';
    }
    console.log(dadosValidos, input.length);
    if (input.length === dadosValidos) {
      validDate();
    } else {
      
    }
  }
}

function validDate() {
  const dataDiv = document.querySelector('#dados');
  const dataInicial = document.querySelector('#Data').value;
  let dia = '';
  let mes = '';
  let ano = '';

  for (let index = 0; index < dataInicial.length; index += 1) {
    if (dataInicial[index] !== '/') {
      if (index < 2) {
        dia += dataInicial[index];
      } else if (index < 5 ) {
        mes += dataInicial[index];
      } else {
        ano += dataInicial[index];
      }
    }
  }

  if (parseInt(dia) < 0 || parseInt(dia) > 31) {
    alert('Dia inválido');
  } else if (parseInt(mes) < 0 || parseInt(mes) > 12 ) {
    alert('Mês inválido');
  } else if (parseInt(ano) < 0) {
    alert('Ano inválido');
  } else {
    for (let index = 0; index < input.length; index += 1) {
      const newDiv = document.createElement('div');
      newDiv.innerHTML = input[index].id + ': ' + input[index].value;
      dataDiv.appendChild(newDiv);
    }
  }
}

resetButton.addEventListener('click', clearDiv);

function clearDiv() {
  const data = document.querySelector('#dados');
  data.innerHTML = ''
}