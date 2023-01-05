const menuBtn = document.querySelector('#menu-button');
const menuCloseBtn = document.querySelector('#menu-close-button')

function toggleMenu() {
    const menuBar = document.querySelector('menu');

    menuBar.style.right === "0px" ? 
            menuBar.style.right = "-20%":
            menuBar.style.right = 0;
}

menuBtn.addEventListener("click", () => toggleMenu());
menuCloseBtn.addEventListener("click", () => toggleMenu())