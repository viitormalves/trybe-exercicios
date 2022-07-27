function numeroMaisRepetido(arrayNumeros) {
  let indexMaisRepetido = 0;
  let contadorNumero = 0;
  let contadorRepetido = 0;
  for (let i in arrayNumeros) {
    let verifica = arrayNumeros[i];
    for (let i2 in arrayNumeros) {
      if (verifica === arrayNumeros[i2]) {
        contadorNumero += 1;
      }
    }
    if (contadorNumero > contadorRepetido) {
      contadorRepetido = contadorNumero;
      indexMaisRepetido = i;
    }
    contadorNumero = 0;
  }
  return arrayNumeros[indexMaisRepetido];
}

console.log(numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]));
