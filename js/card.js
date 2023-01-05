import { findParentTag } from "./common.js"

const RegisterForm = document.querySelector(".card-register-form")
const RegistrCancelBtn = document.querySelector("#register-cancel-button")
const RegistrBtn = document.querySelector("#register-accept-button")
const hiddenNewCard = document.querySelector(".hidden.card-frame");

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
    newCard.classList = "card-frame"

    newCard.children[0].innerHTML = RegisterForm.children[0].value
    newCard.children[1].innerHTML = RegisterForm.children[1].value
    newCard.children[2].innerHTML = "author by web"

    RegisterForm.children[0].value = ""
    RegisterForm.children[1].value = ""

    currentSection.children[0].after(newCard)
    cardCounts()
}

function registerCancel() {
    RegisterForm.style.display = "none";
}

cardCounts();

let sectionHeaders = document.querySelectorAll("div.section-header")
sectionHeaders.forEach((sectionHeader) => {
    sectionHeader.addEventListener("click", () => appearRegisterForm(sectionHeader))
})

RegistrCancelBtn.addEventListener("click", () => {
    registerCancel();
})

RegistrBtn.addEventListener("click", () => {
    registerCard();
})

export { cardCounts }