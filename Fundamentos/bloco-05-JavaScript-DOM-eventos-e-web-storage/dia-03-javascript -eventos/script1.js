function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

let decemberDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
function createDaysOfMonth() {
  let ElementUl = document.querySelector("#days");
  for (let i in decemberDaysList) {
    let createLi = document.createElement("li");
    createLi.innerHTML = decemberDaysList[i];
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 31) {
      createLi.classList.add("day", "dayHoliday");
    } else if (decemberDaysList[i] === 25) {
      createLi.classList.add("day", "dayHoliday", "dayFriday");
    } else if (
      decemberDaysList[i] === 4 ||
      decemberDaysList[i] === 11 ||
      decemberDaysList[i] === 18
    ) {
      createLi.classList.add("day", "dayFriday");
    } else {
      createLi.className = "day";
    }
    ElementUl.appendChild(createLi);
  }
}
createDaysOfMonth();

function createHolidayButton() {
  let elementButtonsContainer = document.querySelector(".buttons-container");
  let createButton = document.createElement("button");
  createButton.innerText = "Feriados";
  createButton.id = "btn-holiday";
  elementButtonsContainer.appendChild(createButton);
}
createHolidayButton();

function displayHolidays() {
  let btnHoliday = document.getElementById("btn-holiday");
  let classHoliday = document.querySelectorAll(".dayHoliday");
  btnHoliday.addEventListener("click", function () {
    for (i in classHoliday) {
      if (classHoliday[i].style.backgroundColor !== "yellow") {
        classHoliday[i].style.backgroundColor = "yellow";
      } else {
        classHoliday[i].style.backgroundColor = null;
      }
    }
  });
}
displayHolidays();

function createFridayButton() {
  let elementButtonsContainer = document.querySelector(".buttons-container");
  let createButton = document.createElement("button");
  createButton.innerText = "Sexta-Feira";
  createButton.id = "btn-friday";
  elementButtonsContainer.appendChild(createButton);
}
createFridayButton();

function displayFriday() {
  let btnFriday = document.getElementById("btn-friday");
  let classFriday = document.querySelectorAll(".dayFriday");
  let friday = [4, 11, 18, 25];
  btnFriday.addEventListener("click", function () {
    for (let i in classFriday) {
      if (classFriday[i].innerText !== "SEXTOU!") {
        classFriday[i].innerText = "SEXTOU!";
      } else {
        classFriday[i].innerHTML = friday[i];
      }
    }
  });
}
displayFriday();

function zoomOn() {
  let zoomDays = document.querySelector("#days");
  zoomDays.addEventListener("mouseover", function (event) {
    event.target.style.fontSize = "30px";
  });
}
zoomOn();

function zoomOff() {
  let zoomDays = document.querySelector("#days");
  zoomDays.addEventListener("mouseout", function (event) {
    event.target.style.fontSize = "20px";
  });
}
zoomOff();

function createTarefaSpan(tarefa) {
  let elementDiv = document.querySelector(".my-tasks");
  let createSpan = document.createElement("span");
  createSpan.innerHTML = tarefa;
  elementDiv.appendChild(createSpan);
}
createTarefaSpan("Projeto");

function taskColor(cor) {
  let taskColor = document.querySelector(".my-tasks");
  let createDiv = document.createElement("div");
  createDiv.className = "task";
  createDiv.style.backgroundColor = cor;
  taskColor.appendChild(createDiv);
}

taskColor("green");

function selectTask() {
  let task = document.querySelector(".task");
  task.addEventListener("click", function () {
    if (task.className === "task") {
      task.classList.add("task", "taskSelected");
    } else {
      task.className = "task";
    }
  });
}
selectTask();

function selectDay() {
  let day = document.querySelector("#days");
  let taskColor = document.querySelector(".taskSelected");
  let color = taskColor.style.backgroundColor;

  day.addEventListener("click", function (e) {
    if (e.target.style.backgroundColor !== color) {
      e.target.style.backgroundColor = color;
    } else {
      e.target.style.backgroundColor = null;
    }
  });
}
selectDay();
