function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = parseInt(value1) + parseInt(value2);

  if (!value1 || !value2) {
    throw new Error ('Insira dois valores'); 
  } else if (isNaN(value1) || isNaN(value2)) {
    throw new Error ('Insira um valor válido');
  } else {
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

function soma() {
  try {
    sum();
  } catch(error) {
    document.getElementById('result').innerHTML = error.message;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', soma);
}