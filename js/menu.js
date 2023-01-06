function toggleMenu() {
    const menuBar = document.querySelector('menu');
    const today = new Date()

    console.log(today)

    menuBar.style.right === "0px" ? 
            menuBar.style.right = "-20%":
            menuBar.style.right = 0;
}

const menuBtn = document.querySelector('#menu-button');
const menuCloseBtn = document.querySelector('#menu-close-button')

menuBtn.addEventListener("click", () => toggleMenu());
menuCloseBtn.addEventListener("click", () => toggleMenu())