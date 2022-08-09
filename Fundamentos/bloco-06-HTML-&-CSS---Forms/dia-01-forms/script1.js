window.onload = function () {
  let enviar = document.querySelector("#botaoEnviar");

  function cancelarEnviar() {
    enviar.addEventListener("click", (event) => {
      event.defaultPrevented();
    });
  }
  cancelarEnviar();
};
