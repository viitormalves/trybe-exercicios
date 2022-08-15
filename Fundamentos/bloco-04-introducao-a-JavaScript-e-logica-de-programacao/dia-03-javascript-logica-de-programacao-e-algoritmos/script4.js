let maiorPrimo = 0;

for (let iNumero = 2; iNumero <= 50; iNumero += 1) {
  let primo = true;
  for (let iDivisor = 2; iDivisor < iNumero; iDivisor += 1) {
    if (iNumero % iDivisor === 0) {
      primo = false;
    }
  }
  if (primo) {
    maiorPrimo = iNumero;
  }
}

console.log(maiorPrimo);
