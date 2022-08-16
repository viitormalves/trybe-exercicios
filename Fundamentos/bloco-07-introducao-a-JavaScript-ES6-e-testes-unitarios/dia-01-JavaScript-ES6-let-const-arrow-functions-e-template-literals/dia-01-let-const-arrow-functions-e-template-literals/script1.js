//Exercício 5:-----------------------------

const substituaX = (nome) => {
  const frase = "Tryber x aqui!";
  let splitFrase = frase.split(" ");
  for (let i = 0; i < splitFrase.length; i += 1) {
    if (splitFrase[i] === "x") {
      splitFrase[i] = nome;
    }
  }
  return splitFrase.join(" ");
};
substituaX("Vitor");

const minhasSkills = (func) => {
  const skills = ["HTML", "CSS", "JavaScript"];
  let concat = `${func} Minhas três principais habilidades são: ${skills}`;
  return concat;
};
console.log(minhasSkills(substituaX("Vitor")));
