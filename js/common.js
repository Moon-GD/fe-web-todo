function findParentTag(currentNode, parentTag) {
    if(currentNode.tagName === parentTag) {
        return currentNode;
    }
    else if(currentNode.parentNode){
        return findParentTag(currentNode.parentNode, parentTag);
    }
    
    return null;
}

export { findParentTag }