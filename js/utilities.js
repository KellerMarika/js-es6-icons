/**** FUNZIONE GENERICA CREAZIONE ELEMENTO  *************************************/
/**createElement
 * 
 * @param {string} tagEl deve contenere un tag html valido, es:"div","span","hn","p","section" ecc..
 * @param {string} class1 deve essere una stringa con "" che racchiude una classe priva di spazi
 * @param {string} class2 deve essere una stringa con "" che racchiude una classe priva di spazi
 * @returns crea un elemento di tipo tagEl con due classi. è imperativo che le classi da aggiungere all'elemento siano 2
 */
 function createElement(tagEl, class1, class2) {

    const created_El = document.createElement(tagEl);
    created_El.classList.add(class1);
    created_El.classList.add(class2);
    return created_El
}


/************* FUNZIONE GENERA array di numeri random *****************/
/**
 * 
 * @param {number} minNumber valore numerico più basso che si accetta nell'array 
 * @param {number} maxNumber valore numerico più alto che si accetta nell'array 
 * @param {number} arrayLenghtNumber numero di elementi di cui si desidera comporre l'array
 * @return 
 */
 function generateArrayOfRandomNumber(minNumber, maxNumber, arrayLenghtNumber) {

    //console.log(minNumber, maxNumber, arrayLenghtNumber);

    //creo un array indefinito
    const array = []
    //console.log(array);
    //comincio un ciclo while che si arresta solo quando avrà finito di reare un array di lunghezza ="arrayLenghtNumber" composto da numeri unici

    while (array.length < arrayLenghtNumber) {
        //richiamo la funzione random number che dovrebbe prendere i valori dagli argomenti
        const randomNumber = randomNumberOfRange(minNumber, maxNumber);
        //console.log(randomNumber);

        //perchè venga inserito nell'array devo controllare di non aver già inserito un numero identico nei cicli precedenti

        //se non è incluso nell'array includilo
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
    return array;
}
/**FUNZIONE RINTRACCIA ELEMENTO
* questa funzione controlla se all'interno di un array è presente il valore n ricercato (correlazione di inclusione) e ritorna vero o falso
* @param {array} array 
* @param {number || string} n utile con this.dataset.x!
* @returns true o false
*/
function checkElement(array, n) {
    if (array.includes(n)) {
        return true
    } else {
        return false
    }
}

export {createElement}