/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
 const getTime =(name) => {
    const now = new Date();
    const orario = now.getHours();
    let result = "Buona sera";
    if((orario < 14) && ( orario > 0)){
        result = "Buongiorno";
    } else if((orario >= 14) && (orario <= 18)){
        result = "buona pomeriggio";
    }
    return `${result} ${name}`;
 }

// Invoca la funzione qui e stampa il risultato in console
const result = getTime(name);
console.log(result);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.