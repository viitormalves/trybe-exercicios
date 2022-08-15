//Exercício 1:-----------------------------
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};
// testingScope(true);

//Exercício 2:------------------------------
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
  for (let index = 1; index < oddsAndEvens.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (oddsAndEvens[index] < oddsAndEvens[secondIndex]) {
        let position = oddsAndEvens[index];
        oddsAndEvens[index] = oddsAndEvens[secondIndex];
        oddsAndEvens[secondIndex] = position;
      }
    }
  }

  return oddsAndEvens;
};

// console.log(sortOddsAndEvens(oddsAndEvens));

//Exercício 3:----------------------------

const fatorial = (num) => {
  let result = num;
  for (let i = num - 1; i >= 1; i -= 1) {
    result = result * i;
  }
  return result;
};
// console.log(`Esse é o fatorial ${fatorial(4)}`);

//Exercício 4:------------------------------
const botao = document.querySelector("#botao");
const numero = document.querySelector("#contador");
let clickCount = 0;

botao = document.addEventListener(
  "click",
  () => (numero.innerHTML = clickCount += 1)
);
