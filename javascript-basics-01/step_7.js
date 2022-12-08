const validateButton = document.querySelector("#validate");
const shoeSizeInput = document.querySelector("#shoe_size");
const yearInput = document.querySelector("#year");

let shoeSize = parseInt(prompt("Please enter your shoe size"));
let birthYear = parseInt(prompt("Please enter your birth year"));

shoeSizeInput.value = shoeSize;
yearInput.value = birthYear;

function myFunc(shoeSize, birthYear) {
    return (shoeSize * 2 + 5) * 50 - birthYear + 1766;
}

validateButton.addEventListener("click", (e)=>{
    e.preventDefault();
    alert ("The answer is: " + myFunc(shoeSize, birthYear));
    shoeSizeInput.value = yearInput.value = "";
})