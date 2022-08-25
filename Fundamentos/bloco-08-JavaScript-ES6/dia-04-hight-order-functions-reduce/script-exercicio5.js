//   🚀 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];


const containsA = () => names
    .reduce((acc, cur) => acc += cur.split('')
    .reduce((acumulator, currLetter) => currLetter === 'a' || currLetter === 'A' ? acumulator + 1 : acumulator, 0), 0);

console.log(containsA());