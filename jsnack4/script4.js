// Snack 4:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt('insert a 4-digit number!');

if(userNumber.length != 4){
    console.log('Wrong Number, Must have 4-digit!');
    userNumber = prompt('Please, insert a 4-digit number!');
} else {
    let sum = 0;
    for (let i = 0; i < userNumber.length; i++){
        sum += parseInt(userNumber.charAt(i));
    }
    console.log(sum);
}