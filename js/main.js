
import { iconsArray } from "./data.js";
import { createElement, generateArrayOfRandomColors } from "./utilities.js"
/* console.log(iconsArray); */

/*************** ELEMENTI ***************************************/

const mainConainer_El = document.getElementById("main-container");
const selectContainer_El = document.getElementById("select-container");
const cardContainer_El = document.querySelector("#main-container #card-container");

/*************** CREATE CARDS ***********************************/

const colors = [
    "blue"
    , "onratechange"
    , "purple"
]

/***************CREATE CARDS IN FILTER FUNCTION **************************************************/

const newArray = []
let iconTypes
let unactivatedCards
let activatedCards
let unactivatedIcons
//array di colori random
const iconColors = generateArrayOfRandomColors(iconsArray.length);

iconTypes = iconsArray.filter((element, i, array, CreateCard) => {

    //cominciamo creazione delle card cardContainer.append(col>card>i+h5)

    const cardCol_El = createElement("div", "col", "p-3");
    //aggiungiamo un dataset "type" che comprende sia la tipologia dell'icona, sia la stringa "all" che le accomuna tutte (prima option di select)
    cardCol_El.dataset.type = `${element.type} all`


    const card_El = createElement("div", "card", "text-center");

    const iconClass1 = element.prefix + element.name
    const iconClass2 = element.prefix + "solid"
    const cardIcon_El = createElement("i", iconClass1, iconClass2);
    //cardIcon_El.style.color = element.color//to change
    cardIcon_El.style.color= iconColors[i]
    const cardTitle_El = createElement("h5", "title", "text-uppercase");
    cardTitle_El.innerHTML = element.name

    cardCol_El.append(card_El);
    card_El.append(cardIcon_El, cardTitle_El);
    cardContainer_El.append(cardCol_El);


    /* generazione di un array contenente solo un elemento per tipo*/
    if (!newArray.includes(element.type)) {

        newArray.push(element.type);
        return (newArray)
    }
});
//console.log(iconTypes);


/***************CREATE SELECT OPTION **************************************************/
const select_El = createElement("select", "form-select", "select-icon-type");

//attraverso il map creiamo un array dove gli elementi sono il valore della proprietà type degli elementi dell'array creato con filter________________perchè non sono riuscita a farlo dentro al filter? ________________________________________________________________DEVO CHIEDERE
let selectOptions = iconTypes.map((element, i, array) => { return element.type });

//aggiungiamo all alla posizione 0 dell'array delle selectOptions
selectOptions.splice(0, 0, "all");
//console.log("selectOption", selectOptions);

selectContainer_El.prepend(select_El);

/**** creazione options ******************************/
selectOptions.forEach((element, i) => {
    const option_El = createElement("option", "icon-type", element);
    /*  Option.name=element */
    option_El.innerText = element;
    option_El.setAttribute("name", element);
    option_El.setAttribute("value", element);

    //la prima la mettiamo in selected
    if (i === 0) {
        option_El.setAttribute("selected", true);
    }
    select_El.appendChild(option_El)
});
//console.log(select_El);

//aggiungiamo l'eventlisntner al change=
select_El.addEventListener("change", filter);
//console.log(select_El.value);

function filter() {
    //console.log(selectOptions);
    //console.log(select_El.value);
    //console.log(unactivatedCards)

    if (select_El.value === selectOptions[0]) {
        disactiveCards(select_El.value)
        activeCards(select_El.value)
    } else if (select_El.value === selectOptions[1]) {
        disactiveCards(select_El.value)
        activeCards(select_El.value)
    } else if (select_El.value === selectOptions[2]) {
        disactiveCards(select_El.value)
        activeCards(select_El.value)
    } else if (select_El.value === selectOptions[3]) {
        disactiveCards(select_El.value)
        activeCards(select_El.value)
    }
}

function disactiveCards(selectValue) {
    //recupero tutte le col a parte quelle corrispondenti alla option selezionata e le colloco in un array
   


    unactivatedCards = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"])`);


    //per rigenerare ogni volta il colore delle cards disattivate una volta riattuvate (non indispensabie)
    let newArrayColors= generateArrayOfRandomColors(unactivatedCards.length);
    unactivatedIcons = document.querySelectorAll(`[data-type]:not([data-type*="${selectValue}"]) i`);




    /*     unactivatedCards = document.querySelectorAll(`.col:not(.${selectValue})`); */
    //ciclo sull'arrat delle col da disattivare
    unactivatedCards.forEach((element, i) => {
        unactivatedCards[i].classList.toggle("d-none", true);

        //per rigenerare ogni volta il colore delle cards disattivate una volta riattuvate (non indispensabie)
        unactivatedIcons[i].style.color=newArrayColors[i]
    });
}

function activeCards(selectValue) {
    //recupero tutte le col corrispondenti alla option selezionata e le colloco in un array

    activatedCards = document.querySelectorAll(`[data-type*="${selectValue}"]`);
    //ciclo sull'arrat delle col da disattivare
    activatedCards.forEach((element, i) => {
        activatedCards[i].classList.toggle("d-none", false);
    });
}



