window.onload = function () {
  function changeBoxColor() {
    let select = document.querySelector("select");
    let boxColor = document.getElementById("boxColor");
    select.addEventListener("change", function () {
      let selected = select.selectedOptions[0];
      boxColor.style.backgroundColor = selected.value;
      localStorage.setItem("corEscolhida", selected.value);
    });
  }
  changeBoxColor();

  function changeFontSize() {
    let inputFontSize = document.querySelector("#font-size");
    let p = document.querySelector("p");
    inputFontSize.addEventListener("change", function () {
      p.style.fontSize = inputFontSize.value;
      localStorage.setItem("fonteEscolhida", inputFontSize.value);
    });
  }
  changeFontSize();

  let backgroundSave = localStorage.getItem("corEscolhida");
  let boxColor = document.getElementById("boxColor");
  boxColor.style.backgroundColor = backgroundSave;

  let fontSizeSave = localStorage.getItem("fonteEscolhida");
  let p = document.querySelector("p");
  p.style.fontSize = fontSizeSave;
};
