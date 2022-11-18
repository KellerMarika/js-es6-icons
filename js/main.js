
import { iconsArray } from "./data.js";
import { createElement } from "./utilities.js"
/* console.log(iconsArray); */

/*************** ELEMENTI ***************************************/
//qua select ++
const maxConainer = document.getElementById("max-container");
//qua select ++
const cardContainer = document.querySelector("#max-container #card-container");

/*************** CREATE CARDS ***********************************/

const colors = [
    "blue"
    , "onratechange"
    , "purple"
]

/***************CREATE CARDS IN FILTER FUNCTION **************************************************/

const newArray = []
let selectOptions=[]

let iconTypes

iconTypes = iconsArray.filter((element, i, array, CreateCard) => {

    //inizio creazione delle card cardContainer.append(col>card>i+h5)

    const cardCol = createElement("div", "col", "p-3");
    const card = createElement("div", "card", "text-center");

    const iconClass1 = element.prefix + element.name
    const iconClass2 = element.prefix + "solid"
    const cardIcon = createElement("i", iconClass1, iconClass2);
    cardIcon.style.color = element.color//to change

    const cardTitle = createElement("h5", "title", "text-uppercase");
    cardTitle.innerHTML = element.name

    cardCol.append(card);
    card.append(cardIcon, cardTitle);
    cardContainer.append(cardCol);


    /* generazione di un array contenente solo un elemento per tipo*/

    if (!newArray.includes(element.type)) {

        newArray.push(element.type);
        return (newArray)
    }
});
console.log(iconTypes)



selectOptions= iconTypes.map((element, i, array) => {
    return element.type    
});
console.log("selectOption",selectOptions);



