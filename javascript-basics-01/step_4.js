const validateButton = document.querySelector("#validate");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const cityInput = document.querySelector("#city");

let name = prompt("What's your name?");
let surname = prompt("What's your name?");
let city = prompt("What's your name?");

nameInput.value = name;
surnameInput.value = surname;
cityInput.value = city;

validateButton.addEventListener("click", (e)=>{
    e.preventDefault();
    alert ("Name: " + name + "\nSurname: " + surname + "\nCity: " + city);
    nameInput.value = surnameInput.value = cityInput.value = "";
})