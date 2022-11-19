
import { iconsArray } from "./data.js";
import { createElement, generateArrayOfRandomColors } from "./utilities.js"
/* //(iconsArray); */

/*************** ELEMENTI ***************************************/

const mainConainer_El = document.getElementById("main-container");
const selectContainer_El = document.getElementById("select-container");
const cardContainer_El = document.querySelector("#main-container #card-container");

/*************** ARRAY **************************************************/

//creiamo un array vuoto che nel filter popoleremo di (element.type)
const newArray = []
//vero e proprio array risultante dal filter types
let iconTypes

//vero e proprio array risultante dal filter family
let iconFamily
//array delle cards(col) che vanno nascoste al click della select
let unactivatedCards
//array delle cards(col) che vengono mostrate al click della select
let activatedCards

/* extra *///array delle icone delle card che vanno nascoste al click della select(è una chicca finale non indispensabile)______
let unactivatedIcons
/* _________________________________________________________________________ */

//array di colori random (utilities)
const iconColors = generateArrayOfRandomColors(iconsArray.length);



/***************CREATE CARDS IN FILTER FUNCTION **************************************************/

iconTypes = iconsArray.filter((element, i, array, CreateCard) => {

    //cominciamo creazione delle card 
    // risultato=  cardContainer.append(col>card>i+h5)

    const cardCol_El = createElement("div", "col", "p-3");
    //aggiungiamo un dataset "type" che comprende sia l'element.type sia l'element.family che le accomuna tutte (prima option di select)
    cardCol_El.dataset.type = `${element.type}  ${element.family}`

    //console.log(cardCol_El)

    const card_El = createElement("div", "card", "text-center");
    //perchè le iconi risultino visibili
    const iconClass1 = element.prefix + element.name
    const iconClass2 = element.prefix + "solid"
    const cardIcon_El = createElement("i", iconClass1, iconClass2);

    /* Milestone 2 color: *///to change
    //cardIcon_El.style.color = element.color
    // ________________________________________________________________

    /* BONUS COLOR: */
    cardIcon_El.style.color = iconColors[i]
    const cardTitle_El = createElement("h5", "title", "text-uppercase");
    cardTitle_El.innerHTML = element.name

    cardCol_El.append(card_El);
    card_El.append(cardIcon_El, cardTitle_El);
    cardContainer_El.append(cardCol_El);

    //*** TYPE FILTER: GENERAZIONE DI UN ARRAY CONTENTENTE UN SOLO ELEMENTO PER TIPO***********************
    /*  
    avrei voluto poter includere nell'array in uscita gli element.type e l'element.family, ma non sono riuscita.
    l'array in uscita da questo filter è sempre un array di oggetti che condividono tutte le proprietà degli oggetti dell'array originale.
    si rende quindi necessario un ciclo successivo (map) dove invece riesco a popolare l'array in uscita con esclusivamente le proprietà degli oggetti che popolano l'array di partenza
    
    //non funziona!
    if (!newArray.includes(element.family)){
            newArray.push(element.family);
        }
     ___________________________________________________________________________________*/

    //filtro per tipo
    if (!newArray.includes(element.type)) {

        newArray.push(element.type);
        //il console log di new array è [animal,vegetables,user]
        //ma il console log dell'array risultante dal filter (iconTypes) comprende i primi 3 oggetti dell'array genitore con type animal, vegetable, user .
        ////(newArray)
        return (newArray);
    }
});
////(iconTypes);
//*** FAMILY FILTER: GENERAZIONE DI UN ARRAY CONTENTENTE UN SOLO ELEMENTO PER FAMIGLIA***********************
//filtro per famiglia
iconFamily = iconsArray.filter((element, i, array) => {
    //new array è sempre vuoto
    if (!newArray.includes(element.family)) {
        newArray.push(element.family);
        return (newArray);
    }
});

/***************CREATE SELECT OPTION **************************************************/
const select_El = createElement("select", "form-select", "select-icon-type");

//attraverso il map creiamo un array dove gli elementi sono il valore della proprietà type degli elementi dell'array creato con filter
//perchè non sono riuscita a farlo dentro al filter? _______________________________________________________________________________________DEVO CHIEDERE
let familyOptions = iconFamily.map((element, i, array) => { return element.family });
////(familyOptions);

//attraverso il map creiamo un array dove gli elementi sono il valore della proprietà family degli elementi dell'array creato con filter
//perchè non sono riuscita a farlo dentro al filter? _______________________________________________________________________________________DEVO CHIEDERE
let typesOptions = iconTypes.map((element, i, array) => { return element.type });
////(typesOptions);

//creo un array che è il risultato della concatenzazione di familyOptions e familyTypes
let selectOptions = familyOptions.concat(typesOptions)

//(avrei potuto fare anche così invece che fare 2 filter e 2 map, ma mi sapeva sporca)
/* selectOptions.splice(0, 0, iconsArray[0].family); */
////("selectOption", selectOptions);

selectContainer_El.prepend(select_El);

/**** CREAZIONE DINAMICA OPTIONS_EL ******************************/

selectOptions.forEach((element, i) => {
    const option_El = createElement("option", "icon-type", element);
    /*  Option.name=element */
    option_El.innerText = element;
    option_El.setAttribute("name", element);
    option_El.setAttribute("value", element);

    //la prima la mettiamo in selected e modifichiamo l'inner text da "fas" ad "all"
    if (i === 0) {
        option_El.innerText = "all"
        option_El.setAttribute("selected", true);
    }
    select_El.appendChild(option_El)
});
////(select_El);

//aggiungiamo l'eventlisntner al change
select_El.addEventListener("change", filterCards);
////(select_El.value);

/*********  FILTERCARDS FUNCTION (evocata al change della select) **************************************************************************************/
/**quando l'utente seleziona una delle option della select invoca 2 funzioni: 
 * disactiveCards
 * activeCards
 * 
 */
function filterCards() {
    ////(selectOptions);
    ////(select_El.value);
    ////(unactivatedCards)


    for (let i = 0; i < selectOptions.length; i++) {
        if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value)
            activeCards(select_El.value)
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value)
            activeCards(select_El.value)
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value)
            activeCards(select_El.value)
        } else if (select_El.value === selectOptions[i]) {
            disactiveCards(select_El.value)
            activeCards(select_El.value)
        }
    }
}
/*********  DISACTIVE FUNCTION (evocata in filterCards() ) **************************************************************************************/

function disactiveCards(selectValue) {

    //recupero tutte le col a parte quelle corrispondenti al valore della option selezionata e le colloco in un array
    //array globale perchè il suo contenuto varia ad ogni click
    //tutte le data-type ([data-type]) eccetto (not:(..)) le data-type comprendono in qualsiasi punto (*) il valore della select
    unactivatedCards = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"])`);


    //per rigenerare ogni volta il colore delle cards disattivate una volta riattuvate (non indispensabie)
    let newArrayColors = generateArrayOfRandomColors(unactivatedCards.length);
    unactivatedIcons = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"]) i`);




    /*     unactivatedCards = document.querySelectorAll(`.col:not(.${selectValue})`); */
    //ciclo sull'array delle col da disattivare
    unactivatedCards.forEach((element, i) => {
        unactivatedCards[i].classList.toggle("d-none", true);

        /* EXTRA */
        //per rigenerare ogni volta il colore delle cards disattivate una volta riattivate (non indispensabie)
        unactivatedIcons[i].style.color = newArrayColors[i]
    });
}

function activeCards(selectValue) {
    //recupero tutte le col corrispondenti al valore della option selezionata e le colloco in un array
    //array globale perchè il suo contenuto varia ad ogni click
    //tutte le data-type ([data-type]) che comprendono in qualsiasi punto (*) il valore della select
    activatedCards = document.querySelectorAll(`[data-type*="${selectValue}"]`);
    //ciclo sull'array delle col da disattivare
    activatedCards.forEach((element, i) => {
        activatedCards[i].classList.toggle("d-none", false);
    });
}



