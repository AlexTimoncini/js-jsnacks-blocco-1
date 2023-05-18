let friendList = [
    'Alex',
    'Pietro',
    'Andrea',
    'Gabriele',
    'Riccardo'
]

let userName = prompt('Insert your name');
let isFound = false;

for (let i = 0; i < friendList.length; i++){
    if (userName === friendList[i]){
        isFound = true;
        
    }
}

if (isFound){
    console.log('Nice to see you my friend!')
}   else {
    console.log('WHO ARE YOU???')
}
