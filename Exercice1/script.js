let User1 = prompt('Enter your year for born');
let User2 = prompt("Enter year of born your friend");

if (User1 < User2) {
    let annee =((2*User2) - User1);
    console.log(`age of your friend is half your age in ${annee}`);
}else {
    let annee = 2 * User1 - User2;
    console.log(`your age is half the age of your friend in ${annee}`);
}