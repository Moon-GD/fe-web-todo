const CARD_BTN_ORIGINAL = "#000";
const CARD_BORDER_ORIGINAL = "none";
const CARD_BACKGROUND_ORIGINAL = "#fff";

const CARD_BTN_HOVER = "#FE5958";
const CARD_BORDER_HOVER = "1px solid " + CARD_BTN_HOVER;
const CARD_BACKGROUND_HOVER = "#FFEEEC";

let cardCloseBtns = document.querySelectorAll(".card-close-button");

cardCloseBtns.forEach((btn) => {
    let cardFrame = btn.parentElement.parentElement;

    btn.addEventListener("mouseover", () => {
        btn.style.color = CARD_BTN_HOVER;
        cardFrame.style.border = CARD_BORDER_HOVER;
        cardFrame.style.backgroundColor = CARD_BACKGROUND_HOVER;
    })

    btn.addEventListener("mouseout", () => {
        btn.style.color = CARD_BTN_ORIGINAL;
        cardFrame.style.border = CARD_BORDER_ORIGINAL;
        cardFrame.style.backgroundColor = CARD_BACKGROUND_ORIGINAL;
    })
})