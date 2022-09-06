const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
sendMarsTemperature = () => `A temperatura de Marte é ${getMarsTemperature()} graus celsius`

setTimeout(() => {
    console.log(sendMarsTemperature());
}, Math.random() * 5000);

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo