function maiorNome(nomes) {
  let maiorNome = "";
  for (let i in nomes) {
    if (maiorNome.length < nomes[i].length) {
      maiorNome = nomes[i];
    }
  }
  console.log(maiorNome);
}

maiorNome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]);
