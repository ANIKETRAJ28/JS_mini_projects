let slider = document.querySelector("[passStrengthSlider]");
let passLen = document.querySelector("[passLengthNumber]");
let passDisplay = document.querySelector("[passDisplayNumber]");
let copyBtn = document.querySelector("[passDisplayNumber]");
let copy = document.querySelector("[passCopy]");
let copyMsg = document.querySelector("[copyMsg]");
let uppercase = document.querySelector(".uppercase");
let lowercase = document.querySelector(".lowercase");
let number = document.querySelector(".numbers");
let symbol = document.querySelector(".symbols");
let passStrength = document.querySelector(".strengthIndiacator");
let generate = document.querySelector(".generateButton");
let chkBox = document.querySelectorAll("input[type=checkbox]");

let passLength = 10;
let password = "";
let chkCnt = 1;

handleSlider();

// sets password length to the sength of the slider 
function handleSlider(){
    slider.value = passLength;
    passLen.innerText = passLength;
}

// function to get random number between selected numbers eg (x,y) where x is inclusive and y is exclusive
    // Math.random function will give random number between 0-1
    // multiplying it by (max-min) will give a no.
    // adding by min will give a no. between min and max
    // then floor method to get the round value
function getRandom(min, max){
    return(Math.floor((Math.random()*(max-min)+min)));
}

// function to get random one digit number
function getRandomNumber(){
    console.log(getRandom(0, 10));
}

// function to get random uppercase alphabet ascii number
// String.fromCharCode() method is used to get the alphabet from thr given code
function getRandomUppercase(){
    return String.fromCharCode(getRandom(65, 92));
}

// function to get random one digit number
function getRandomLowercase(){
    return String.fromCharCode(getRandom(97, 123));
}

// function to get random one digit number
// we will make a string of symbols and find random index within the range of string and get the character at that index
let symbols = "!@#$%&*({)?})=+-_;:';<>.,`~";

function getRandomSymbol(){
    let index = getRandom(0, symbols.length);
    return symbols[index];
}

