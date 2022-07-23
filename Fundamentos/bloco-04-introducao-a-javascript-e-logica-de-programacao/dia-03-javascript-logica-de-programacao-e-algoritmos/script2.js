let word = "tryber";
let reverso = "";

for (i = word.length - 1; i >= 0; i -= 1) {
  reverso += word[i];
}
console.log(reverso);
