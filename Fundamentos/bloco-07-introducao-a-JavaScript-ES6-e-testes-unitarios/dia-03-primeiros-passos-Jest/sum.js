function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

function encode(frase) {
  let split = frase.split("");
  let fraseCod = [];
  for (let i in split) {
    if (split[i] === "a") {
      fraseCod.push("1");
    } else if (split[i] === "e") {
      fraseCod.push("2");
    } else if (split[i] === "i") {
      fraseCod.push("3");
    } else if (split[i] === "o") {
      fraseCod.push("4");
    } else if (split[i] === "u") {
      fraseCod.push("5");
    } else {
      fraseCod.push(split[i]);
    }
  }
  fraseCod = fraseCod.join("");
  return fraseCod;
}
function decode(frase) {
  let split = frase.split("");
  let fraseDecod = [];
  for (let i in split) {
    if (split[i] === "1") {
      fraseDecod.push("a");
    } else if (split[i] === "2") {
      fraseDecod.push("e");
    } else if (split[i] === "3") {
      fraseDecod.push("i");
    } else if (split[i] === "4") {
      fraseDecod.push("o");
    } else if (split[i] === "5") {
      fraseDecod.push("u");
    } else {
      fraseDecod.push(split[i]);
    }
  }
  fraseDecod = fraseDecod.join("");
  return fraseDecod;
}

function techList(techName, name) {
  if (techName.length === 0) {
    return "Vazio!";
  }
  techName.sort();
  let objeto = [];
  for (let i in techName) {
    objeto.push({
      tech: techName[i],
      name: name,
    });
  }
  return objeto;
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode, techList };
