let value = document.querySelector("#value");
let rbtn = document.querySelector("#rbtn");
let lbtn = document.querySelector("#lbtn");

rbtn.addEventListener("click", function(){
    let newvalue = parseInt(value.innerText);
    newvalue++;
    value.innerText = newvalue;
});
lbtn.addEventListener("click", function(){
    let newvalue = parseInt(value.innerText);
    newvalue--
    value.innerText = newvalue;
});