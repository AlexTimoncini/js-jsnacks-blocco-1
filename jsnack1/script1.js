// Snack 1:
// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let numberList = [];
let sum = 0;
for (let i = 0; i <= 10; i++){
    let userNumber = parseInt(prompt('Insert a random number'));
    numberList.push(userNumber);
    sum += userNumber;
    console.log(sum);
}

