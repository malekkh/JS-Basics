
const password = document.querySelector("#password")
const confirmation = document.querySelector("#confirmation")
const btn = document.querySelector("button")

btn.addEventListener("click", (e)=>{
    if(password.value != confirmation.value) {
        let redBorder = "1px solid red";
        password.style.border = redBorder;
        confirmation.style.border = redBorder;
    }
})