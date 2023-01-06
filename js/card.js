import { findParentTag, clearDomValue } from "./common.js"
import { makeCardDragEvent } from "./drag/addDragEvent.js"
import { PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST, getData } from "./data-storage/dataFunctions.js"

const RegisterForm = document.querySelector(".card-register-form")
const RegistrCancelBtn = document.querySelector("#register-cancel-button")
const RegistrBtn = document.querySelector("#register-accept-button")
const hiddenNewCard = document.querySelector(".hidden.card-frame");

let todoList = []
let doingList = []
let doneList = []

async function cardShow() {
    todoList = await getData(PATH_TODO_LIST)
    doingList = await getData(PATH_DOING_LIST)
    doneList = await getData(PATH_DONE_LIST)
}

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

function appearRegisterForm(parentHeader) {
    RegisterForm.style.display = "block";
    parentHeader.after(RegisterForm)
}

function registerCard() {
    let newCard = hiddenNewCard.cloneNode(true)
    let currentSection = findParentTag(RegisterForm, "SECTION")

    RegisterForm.style.display = "none";

    //  새로운 카드 id 부여
    // 현재는 34번으로 임의 부여 중
    newCard.classList = "card-frame"
    newCard.id = 34
    
    makeCardDragEvent(newCard)

    newCard.children[0].innerHTML = RegisterForm.children[0].value
    newCard.children[1].innerHTML = RegisterForm.children[1].value
    newCard.children[2].innerHTML = "author by web"

    clearDomValue([RegisterForm.children[0], RegisterForm.children[1]])

    currentSection.children[0].after(newCard)
    cardCounts()
}

cardShow();

function registerCancel() {
    clearDomValue([RegisterForm.children[0], RegisterForm.children[1]])
    RegisterForm.style.display = "none";
}

let cardPlusBtns = document.querySelectorAll("i.card-plus-button")
cardPlusBtns.forEach((cardPlusBtn) => {
    cardPlusBtn.addEventListener("click", () => appearRegisterForm(cardPlusBtn.parentElement.parentElement))
})

RegistrCancelBtn.addEventListener("click", () => {
    registerCancel();
})

RegistrBtn.addEventListener("click", () => {
    registerCard();
})

cardCounts();

export { cardCounts }