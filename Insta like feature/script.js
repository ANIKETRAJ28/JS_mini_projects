let container = document.querySelector("#card");
let heart = document.querySelector("i");

container.addEventListener('dblclick', function(){
    console.log("Hello");
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 0.7;

    setTimeout(function(){
        heart.style.opacity = 0;
    }, 500);
    setTimeout(function(){
        heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1000)
});

