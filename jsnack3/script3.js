// Snack 3:
// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

let evenList = [];

for (let i = 0; i < 6; i++){
    let userNumber = parseInt(prompt('Insert a number'));
    if ((userNumber % 2) != 0){
        evenList.push(userNumber);
    }
    console.log(evenList);
}
