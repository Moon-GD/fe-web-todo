import {manager} from "./dragIDManager.js"

function makeShadedNode() {
    let movedCard = document.getElementById(manager.getID())
    movedCard.style.opacity = 0.5

    return movedCard
}

function addChildToParent(parentNode, childNode) {
    parentNode.after(childNode);
}

export { makeShadedNode, addChildToParent }