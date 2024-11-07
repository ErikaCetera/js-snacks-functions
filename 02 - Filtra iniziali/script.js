/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
 function filtra (array, letter) {
    const result =[];
    for (let i =0; i < names.length; i++){
        let curItem = names[i];
        if(letter === curItem[0]){
            result.push(curItem);
        }
    }
    return result;
 }
// Invoca la funzione qui e stampa il risultato in console
const filtraLettera = filtra(names, 'A');
    console.log(filtraLettera);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]