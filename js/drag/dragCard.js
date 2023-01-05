import {makeShadedNode, makeLightNode, addChildToParent} from "./dragEffect.js";
import {manager} from "./dragIDManager.js";
import { cardCounts } from "../card.js"

function dragCard(parentNode, event) {
    manager.setID(event.target.id)
    addChildToParent(parentNode, makeShadedNode())
}

function dragOverCard(parentNode, event) {
    event.preventDefault();
    parentNode.after(makeShadedNode())
}

function dropCard(parentNode) {
    let child = makeLightNode();
    addChildToParent(parentNode, child)
    cardCounts();
}

export { dragCard, dragOverCard, dropCard }