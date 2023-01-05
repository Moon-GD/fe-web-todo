import {makeShadedNode, addChildToParent} from "./dragEffect.js";
import {manager} from "./dragIDManager.js";

let cards = document.querySelectorAll(".card-frame");
let sectionHeaders = document.querySelectorAll(".section-header")

function dragCard(parentNode, event) {
    manager.setID(event.target.id)
    addChildToParent(parentNode, makeShadedNode())
}

function dragOverCard(parentNode, event) {
    event.preventDefault();
    parentNode.after(makeShadedNode())
}

function dropCard(parentNode) {
    let child = makeShadedNode()
    child.style.opacity = 1;
    addChildToParent(parentNode, child)
}

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
        let movedCard = document.getElementById(manager.getID())
        movedCard.style.opacity = 1;
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