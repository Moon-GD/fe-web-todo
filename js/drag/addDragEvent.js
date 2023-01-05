import { makeLightNode } from "./dragEffect.js";
import { dragCard, dragOverCard, dropCard } from "./dragCard.js";

let cards = document.querySelectorAll(".card-frame");
let sectionHeaders = document.querySelectorAll(".section-header")

cards.forEach((card) => {
    card.addEventListener("dragstart", (event) => {
        dragCard(card, event)
    })

    card.addEventListener("dragover", (event) => {
        dragOverCard(card, event)
    })

    card.addEventListener("drop", (event) => {
        dropCard(card, event)
    })

    card.addEventListener("dragend", () => {
        makeLightNode();
    })
})

sectionHeaders.forEach((sectionHeader) => {
    sectionHeader.addEventListener("dragover", (event) => {
        dragOverCard(sectionHeader, event)
    })

    sectionHeader.addEventListener("drop", () => {
        dropCard(sectionHeader)
    })
})