let atleta = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: { golden: 2, silver: 3 },
};
console.log(
  "A jogadora",
  atleta.name,
  atleta.lastName,
  "tem",
  atleta.age,
  "anos de idade."
);
atleta["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(
  "A jogadora",
  atleta["name"],
  atleta.lastName,
  "foi eleita a melhor do mundo por 6 vezes nos anos de",
  atleta.bestInTheWorld
);
