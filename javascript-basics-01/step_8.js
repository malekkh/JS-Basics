const validateButton = document.querySelector("#validate");
const ageInput = document.querySelector("#age");

let age = parseInt(prompt("Please enter your age"));

ageInput.value = age;

validateButton.addEventListener("click", (e)=>{
    e.preventDefault();
    (age >= 18)? alert("You are over 18") : alert("you are under 18");
    ageInput.value = "";
})