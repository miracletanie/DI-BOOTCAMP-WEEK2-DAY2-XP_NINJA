
let userReponse = prompt("Enter a word");
let reg = /[aeiou]/gi
const subst = " ";
let result = userReponse.replace(reg, subst);
console.log('Substitution result: ', result);
