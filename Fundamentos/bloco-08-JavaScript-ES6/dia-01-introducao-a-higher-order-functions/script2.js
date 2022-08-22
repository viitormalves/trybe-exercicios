const randomic = () => Number((Math.random()* 5).toFixed(0)); 
console.log(randomic());
const check = (aposta, sorteio) => (aposta === sorteio()) ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(check(2, randomic));