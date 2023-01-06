import { findParentTag, clearDomValue } from "./common.js"
import { makeCardDragEvent } from "./drag/addDragEvent.js"
import { TODO, DOING, DONE, PATH_TODO_LIST, PATH_DOING_LIST, PATH_DONE_LIST, getData } from "./data-storage/dataFunctions.js"

const RegisterForm = document.querySelector(".card-register-form")
const RegistrCancelBtn = document.querySelector("#register-cancel-button")
const RegistrBtn = document.querySelector("#register-accept-button")
const hiddenNewCard = document.querySelector(".hidden.card-frame");

let todoLists = [[], [], []]

async function updateTodoLists() {
    todoLists[TODO] = await getData(PATH_TODO_LIST)
    todoLists[DOING] = await getData(PATH_DOING_LIST)
    todoLists[DONE] = await getData(PATH_DONE_LIST)
}

// 임시 함수
// 추후 변경 필요
let id = 100
function giveCardID() {
    id += 1
    return id;
}

function makeCard(title, content) {
    let newCard = hiddenNewCard.cloneNode(true)
    newCard.classList = "card-frame"
    newCard.setAttribute("draggable", true)
    newCard.id = giveCardID()
    makeCardDragEvent(newCard)

    newCard.children[0].innerHTML = title
    newCard.children[1].innerHTML = content
    newCard.children[2].innerHTML = "author by web"

    return newCard
}

async function cardShow() {
    await updateTodoLists()

    let cards = [[], [], []]
    let Headers = document.querySelectorAll(".section-header")

    todoLists[TODO].forEach((todoList) => {
        cards[TODO].push(makeCard(todoList.title, todoList.content))
    })

    todoLists[DOING].forEach((doingList) => {
        cards[DOING].push(makeCard(doingList.title, doingList.content))
    })

    todoLists[DONE].forEach((doneList) => {
        cards[DONE].push(makeCard(doneList.title, doneList.content))
    })

    Headers.forEach((Header, index) => {
        cards[index].forEach((card) => {
            Header.after(card)
        })
    })

    await cardCounts()
}

async function cardCounts() {
    await updateTodoLists()

    let cardLengths = document.querySelectorAll("span.cardlist-length")

    cardLengths.forEach((cardLength, index) => {
        cardLengths[index].innerHTML = todoLists[index].length
    })
}

function appearRegisterForm(parentHeader) {
    RegisterForm.style.display = "block";
    parentHeader.after(RegisterForm)
}

function registerCard() {
    let newCard = makeCard(RegisterForm.children[0].value, RegisterForm.children[1].value)
    hiddenNewCard.cloneNode(true)
    let currentSection = findParentTag(RegisterForm, "SECTION")

    RegisterForm.style.display = "none";

    //  새로운 카드 id 부여
    // 현재는 34번으로 임의 부여 중
    newCard.classList = "card-frame"
    newCard.id = 34
    
    makeCardDragEvent(newCard)

    clearDomValue([RegisterForm.children[0], RegisterForm.children[1]])

    currentSection.children[0].after(newCard)
    cardCounts()
}

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
cardShow();

export { cardCounts }