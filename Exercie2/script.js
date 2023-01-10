let codePostale = prompt("Please enter first zip code");

if (codePostale.length == 5 && isNaN(codePostale) == false ) {
    console.log(`Success, Thank your zip code : ${codePostale} is correct!`);
}else {
    console.log(`Error, Please enter a valid zip code`);
}

// Second parts 

let codePostaleRegex = prompt("Please enter second zip code");

let regex = /^\d{5}$/;
let testPostale = codePostaleRegex.match(regex);  

if (testPostale) {
    console.log(`Successed, Thank your zip code : ${codePostaleRegex} is correct!`);
}else {
    console.log(`Error, Please enter a valid zip code`);
}