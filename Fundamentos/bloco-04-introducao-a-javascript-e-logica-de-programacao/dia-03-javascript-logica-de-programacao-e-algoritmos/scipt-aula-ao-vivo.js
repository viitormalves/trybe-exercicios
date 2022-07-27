// 1. Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato: A soma de 1 a 50 é: X.

let resultado = 0;

for (i = 1; i <= 50; i += 1) {
  resultado += i;
}

console.log("A soma de 1 a 50 é:", resultado);

//2. Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3. Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let n = 0;

for (i = 2; i <= 150; i += 1) {
  if (i % 3 === 0) {
    n = n + 1;
  }
}
if (n === 50) {
  console.log("Mensagem Secreta");
}

//3. Crie um algoritmo que recebe a idade de Nat, Renan e Sincero e imprime quem é a pessoa mais nova no formato: "Pessoa" é a mais nova.

let nat = 10;
let renan = 12;
let sincero = 28;

if (nat < renan && nat < sincero) {
  console.log("A pessoa mais nova é a Nat");
} else if (renan < sincero) {
  console.log("A pessoa mais nova é o Renan");
} else {
  console.log("A pessoa mais nova é o Sincero");
}
