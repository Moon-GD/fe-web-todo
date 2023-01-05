function cardCounts() {
    let cardLists = document.querySelectorAll("section.section-cardlist");
    let elementLength = document.querySelectorAll("span.cardlist-length")

    cardLists.forEach((cardList, index) => {
        let count = 0;

        cardList.childNodes.forEach((node) => {
            if(node.classList && node.classList[0] == "card-frame") count += 1;
        })

        elementLength[index].innerHTML = count
    })
}

cardCounts();

export { cardCounts }