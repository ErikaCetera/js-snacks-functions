/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
 
/**
 * Description placeholder
 *
 * @param {string} parola
 * @returns {number}
 */
function contaVocali(parola) { 
    const vocali = 'aeiouAEIOU'; 
    let contatore = 0; 
    for (let i = 0; i < parola.length; i++) { 
        if (vocali.includes(parola[i])) {
             contatore++; 
             
            } 
             
         }
    return contatore;
   
}  

    


// Invoca la funzione qui e stampa il risultato in console
const numeroVocali = contaVocali(word);
console.log(`Numero di vocali nella stringa: ${numeroVocali}`);

//Risultato atteso se si passa 'javascript': 3 (a, a, i)