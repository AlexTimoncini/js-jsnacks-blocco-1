// Snack 4:
// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt('insert a 4-digit number!');

if(userNumber.length != 4){
    console.log('Wrong Number, Must have 4-digit!');
} else {
    console.log(parseInt(userNumber.substring(0, 1)) + parseInt(userNumber.substring(1, 2)) + parseInt(userNumber.substring(2, 3)) + parseInt(userNumber.substring(3)))
}