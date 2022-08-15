let palavra = "arara";

function verificaPalindrome(palavra) {
  let palavraReversa = "";
  let verificacao;
  for (let i = palavra.length - 1; i >= 0; i -= 1) {
    palavraReversa += palavra[i];
  }
  if (palavraReversa === palavra) {
    verificacao = true;
  } else {
    verificacao = false;
  }
  console.log(verificacao);
}

verificaPalindrome(palavra);
