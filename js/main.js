
import { iconsArray } from "./data.js";
import { createElement, checkElement } from "./utilities.js"
/* console.log(iconsArray); */

/*************** ELEMENTI ***************************************/
//qua select ++
const maxConainer = document.getElementById("max-container");
//qua select ++
const cardContainer = document.querySelector("#max-container .row");

/*************** CREATE CARDS ***********************************/

const colors = [
    "blue"
    , "onratechange"
    , "purple"
]

/* filter creo array recupero type */

const newArray = []
let types = iconsArray.filter((element, i, array) => {


    const cardCol = createElement("div", "col", "p-3");
    const card = createElement("div", "card", "text-center");


    const iconClass1 = element.prefix + element.name
    // console.log(element.prefix+element.name)

    const iconClass2 = element.prefix + "solid"
    const cardIcon = createElement("i", iconClass1, iconClass2);
    cardIcon.style.color = element.color

    const cardTitle = createElement("h5", "title", "text-uppercase");
    cardTitle.innerHTML = element.name

    cardCol.append(card);
    card.append(cardIcon, cardTitle);
    cardContainer.append(cardCol);

    if (!newArray.includes(element.type)) {
        newArray.push(element.type);
        console.log(newArray);
        return true
    }
});

console.log(types)
/* 
const editorsList = usersList.filter(function (element) {
    return element.ruoloAziendale === "Chief Editor";
  });
  
  // const editorsList2 = usersList.filter((element) => element.ruoloAziendale === "Chief Editor");
  
  console.log(developersList, editorsList);  */

