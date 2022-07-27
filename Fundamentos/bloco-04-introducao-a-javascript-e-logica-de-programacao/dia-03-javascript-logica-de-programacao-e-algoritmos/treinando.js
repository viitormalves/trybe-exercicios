// let fatorial = 1;

// for (i = 10; i >= 1; i -= 1) {
//   fatorial = fatorial * i;
// }
// console.log(fatorial);
// <------------------------------------------------------------------------------------------------------------------------------>
// let word = "tryber";
// let reverse = "";

// for (i = word.length - 1; i >= 0; i -= 1) {
//   reverse += word[i];
// }
// console.log(reverse);
// <------------------------------------------------------------------------------------------------------------------------------>
// let array = ["java", "javascript", "python", "html", "css"];
// let maior = array[0];
// let menor = array[0];

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i].length > maior.length) {
//     maior = array[i];
//   }
// }

// for (let i = 0; i < array.length; i += 1) {
//   if (array[i].length < menor.length) {
//     menor = array[i];
//   }
// }

// console.log(maior, menor);
// <------------------------------------------------------------------------------------------------------------------------------>

// let primos = 0;

// for (i = 2; i <= 50; i += 1) {
//   if (i %
// }

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (
    let currentDivisor = 2;
    currentDivisor < currentNumber;
    currentDivisor += 1
  ) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
