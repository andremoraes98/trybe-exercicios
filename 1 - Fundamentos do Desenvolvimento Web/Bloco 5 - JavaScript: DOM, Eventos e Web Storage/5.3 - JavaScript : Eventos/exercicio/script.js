function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
// Escreva seu código abaixo.
// 1 - Acrescentar os dias ao calendário
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

  let ulListDays = document.querySelector("#days")
  
  for ( let index = 0; index < dezDaysList.length; index += 1 ) {
    let day = dezDaysList[index], dayItemList = document.createElement('li')
    dayItemList.innerText = day
    dayItemList.className = "day"

    if (day === 24 || day === 25 || day === 31 ) {
        dayItemList.className += " holiday"
    }
    if ( day === 4 || day === 11 || day === 18 || day === 25 ) { 
        dayItemList.className += " friday"
    }
    ulListDays.appendChild(dayItemList)
  }
// 2 - Acrescentar o botão com o nome "Feriados" através de uma function
function addButton (string) {
  let divParent = document.querySelector(".buttons-container")
  let buttonHoliday = document.createElement("button")
  buttonHoliday.innerText = string
  buttonHoliday.id = "btn-holiday"

  divParent.appendChild(buttonHoliday)
}
addButton("Feriados");

// 3 - Evento adicionado ao butão que, quando clicado, mude o background color dos feriados

let feriados = false, btn = document.querySelector('#btn-holiday'), holidays = document.querySelectorAll(".holiday")

btn.addEventListener("click", addColorHoliday)

function addColorHoliday () {
  if ( feriados ) {
    for (let index = 0; index < holidays.length; index += 1 ) {
      holidays[index].style.backgroundColor = "rgb(238,238,238)"
    }
    feriados = false;
  } else {
    for (let index = 0; index < holidays.length; index += 1 ) {
      holidays[index].style.backgroundColor = "pink"
    }
    feriados = true;
  }
}