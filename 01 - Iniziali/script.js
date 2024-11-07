/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

/**
 * Description placeholder
 *
 * @param {string} names
 * @returns {string}
 * 
 */

// Dichiara la funzione qui.
 const initials= names.map( curName => curName.charAt(0));

// Invoca la funzione qui e stampa il risultato in console
console.log(initials);


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]