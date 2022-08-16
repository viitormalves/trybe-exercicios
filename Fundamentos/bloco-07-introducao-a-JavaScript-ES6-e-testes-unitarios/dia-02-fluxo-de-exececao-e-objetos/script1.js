const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const turnoDaNoite = (lesson2, turno, noite) => {
  lesson2[turno] = noite;
};

turnoDaNoite(lesson2, "turno", "noite");

const listarKeys = (lesson) => Object.keys(lesson);

const tamanhoObjeto = (lesson) => Object.keys(lesson).length;

const listarValores = (lesson) => Object.values(lesson);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// console.log(allLessons);

const totalEstudantes = (allLessons) => {
  let total = 0;
  const array = Object.keys(allLessons);
  for (let i in array) {
    total += allLessons[array[i]].numeroEstudantes;
  }
  return total;
};

// console.log(totalEstudantes(allLessons));

const valorIndiceObjeto = (obj, indice) => Object.values(obj)[indice];

// console.log(valorIndiceObjeto(lesson1, 0));

const verificaPar = (obj, chave, valor) => {
  const par = Object.entries(obj);
  let verifica = false;
  for (let i in par) {
    if (par[i][0] === chave && par[i][1] === valor) {
      verifica = true;
    }
  }
  return verifica;
};

console.log(verificaPar(lesson3, "turno", "noite"));
console.log(verificaPar(lesson3, "materia", "Maria Clara"));
