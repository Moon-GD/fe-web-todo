function cardCounts() {
    let cardLists = document.querySelectorAll("section.section-cardlist");
    let elementLength = document.querySelectorAll("span.cardlist-length")

    cardLists.forEach((cardList, index) => {
        elementLength[index].innerHTML = cardList.childElementCount - 1
    })
}

cardCounts();

export { cardCounts }