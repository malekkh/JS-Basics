
const validateButton = document.querySelector("#validate");
const firstNumInput = document.querySelector("#first_number");
const secondNumInput = document.querySelector("#second_number");

let num1 = parseInt(prompt("Please enter the first number"));
let num2 = parseInt(prompt("Please enter the second number"));

firstNumInput.value = num1;
secondNumInput.value = num2;

validateButton.addEventListener("click", (e)=>{
    e.preventDefault();
    alert ("The answer is: " + (num1 % num2));
    firstNumInput.value = secondNumInput.value = "";
})