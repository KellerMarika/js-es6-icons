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
//una stringa è un array di caratteri quindi non ho bisogno di fare questo:
/*     const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const letters =["a","b","c","d","e","f"]; */

//dovrebbe bastarmi fare così:
/************* FUNZIONE GENERA STRINGA RANDOM PARTENDO DA UNA STRINGA DI CARATTERI AMMESSI (anche ripetuti)*****************/

/**Sorteggia a caso una stringa di caratteri di lunghezza =lenght partendo da una stringa composta da tutti i caratteri accettati (caracters)
 * 
 * @param {number} randomStringlength lunghezza desiderata della stringa random in uscita
 * @param {string} stringAdmittedCaracters stringa composta da tutti i caratteri fra cui è possibile sorteggiare per comporre la stringa in uscita
 * @returns una stringa composta da aratteri sorteggiati a caso tra quelli che  compongono la stringa di riferimento, della lunghezza della lenght passata per argomento
 */
function sortRandomString(randomStringlength, stringAdmittedCaracters) {
    let result = '';
    //cicla
    for (var i = randomStringlength; i > 0; --i) result += stringAdmittedCaracters[Math.round(Math.random() * (stringAdmittedCaracters.length - 1))];
    return result;
}

/************* FUNZIONE GENERA AFFAY OF RANDOM COLOR *****************/
/**crea un array di lenght=arraylenghtNumbr, i cui elementi sono stringhe randomiche uniche di caratteri esadecimali compresi tra (0,9) e (a,f), precedute dal simbolo # 
 * (possono essere adoperati per personalizzare la proprietà element.style.color=array[i])
 * 
 * @param {number} arrayLenghtNumber numero di elementi di cui si desidera popolare l'array in uscita
 * @return  array di lenght=(arrayLenghtNumber) popolato da stringhe esadecimali di 6 cifre precedute da # (si possono impiegare per modificare la proprietà in linea element.style.color= array[i])
 */
 function generateArrayOfRandomColors(arrayLenghtNumber) {

    //creo un array indefinito
    const array = []
    //stringa dei caratteri esadecimali che compongono i colori
    const esadecimalColorCaracters = "0123456789abcdef"
    //console.log(array);
    //comincio un ciclo while che si arresta solo quando avrà finito di creare un array di lunghezza ="arrayLenghtNumber" composto da numeri unici

    while (array.length < arrayLenghtNumber) {
        //richiamo la funzione random string a cui passo gli argomenti necessari
        const randomString = "#"+sortRandomString(6, esadecimalColorCaracters)
             //perchè venga inserito nell'array devo controllare di non aver già inserito un valore identico nei cicli precedenti

        //i codici colore ammettono ripetizioni di caratteri
        array.push(randomString);
    }
    return array;
}
export { createElement, generateArrayOfRandomColors }

/* modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F. */

