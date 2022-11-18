
import{iconsArray} from "./data.js";
import {createElement} from "./utilities.js"
/* console.log(iconsArray); */
 
/*************** ELEMENTI ***************************************/
//qua select ++
const maxConainer = document.getElementById("max-container");
//qua select ++
const cardContainer = document.querySelector("#max-container .row");

/***************  ***************************************/

iconsArray.forEach((element, i) => {

    /*  console.log(element) */

    const cardCol = createElement("div", "col", "p-3");
    const card = createElement("div", "card", "text-center");


    const iconClass1 = element.prefix + element.name
    // console.log(element.prefix+element.name)

    const iconClass2 = element.prefix + "solid"
    const cardIcon = createElement("i", iconClass1, iconClass2);
    cardIcon.style.color=element.color

    const cardTitle = createElement("h5","title","text-uppercase");
    cardTitle.innerHTML=element.name

    cardCol.append(card);
    card.append(cardIcon, cardTitle);

});