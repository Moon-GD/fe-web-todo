let registerForm = document.querySelector("#register-form");

function contentChange(keyCode) {
    let formHeight = parseInt(registerForm.style.height)
    let diff = 0;

    if(keyCode == 8) {
        diff = -3;
    }
    else if(keyCode == 13) {
        diff= 3;
    }

    Number.isNaN(formHeight) || formHeight + diff < 8 ?
            registerForm.style.height = "8vh" :
            registerForm.style.height = String(parseInt(formHeight) + diff) + "vh";
}

registerForm.addEventListener("keydown", (event) => {
    contentChange(event.keyCode)
})