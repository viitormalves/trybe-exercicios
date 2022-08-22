const randomic = () => Math.floor(Math.random() * (5 + 1)); 
const check = (aposta, sorteio) => {
    sorteio = sorteio();
    if (aposta === sorteio) {
        return `Parabéns você ganhou ${sorteio}`
    } return `Tente novamente ${sorteio}`;
}
// console.log(randomic());
console.log(check(2, randomic));