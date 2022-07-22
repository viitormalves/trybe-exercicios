const salario = 3000;
let inss = 0;
let descontoIR = 0;
let salarioLiquido = 0;

if (salario <= 1556.94) {
    inss = (salario - salario * 0.08);
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = (salario - salario *0.09);
} else if (salario >= 2594.93 && salario <= 5189.82) {
    inss = (salario - salario *0.11);
} else {
    inss = (salario - 570.88);
};
console.log(inss);

const baseSalarial = inss;


if (baseSalarial <= 1903.98) {
    descontoIR = 0;
} else if (baseSalarial <= 2826.65) {
    descontoIR = (baseSalarial * 0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
    descontoIR = (baseSalarial * 0.15) - 354.80;
} else if (baseSalarial <= 4664.68) {
    descontoIR = (baseSalarial * 0.225) - 636.13;
} else {
    descontoIR = (baseSalarial * 0.275) - 869.36;
};

salarioLiquido = baseSalarial - descontoIR;

console.log('Salario: ' + salarioLiquido);