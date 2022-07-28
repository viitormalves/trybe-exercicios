// let cabecalho = document.getElementById("header-container");
// cabecalho.style.background = "rgb(0, 176, 105)";
// cabecalho.style.color = "white";
// cabecalho.style.textAlign = "center";
// cabecalho.style.fontFamily = "Arial";
// cabecalho.style.fontSize = "10px";
// cabecalho.style.padding = "1px";

// let section = document.getElementsByClassName("emergency-tasks")[0];
// section.style.display = "inline-block";
// section.style.width = "50%";
// section.style.background = "purple";
// section.style.color = "white";
// section.style.textAlign = "center";
// section.style.padding = "1px";
// section.style.margin = "2px";

const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 105)";

const emergencyTasks = document.getElementsByClassName("emergency-tasks")[0];
emergencyTasks.style.backgroundColor = "rgb(255, 159, 132)";

const emergencyTasksHeaders = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
  emergencyTasksHeaders[index].style.backgroundColor = "rgb(165, 0, 243)";
}

const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgb(249, 219, 94)";

const noEmergencyTasksHeaders = document.querySelectorAll(
  ".no-emergency-tasks h3"
);
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
  noEmergencyTasksHeaders[index].style.backgroundColor = "rgb(35, 37, 37)";
}

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";
