let ele = document.querySelectorAll(".ele");
ele.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1;
    });
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0;
    });
    val.addEventListener("mousemove", function(event){
        val.childNodes[3].style.left = event.x+"px";
    });
});


// let ele = document.querySelector(".ele");
// let eleImg = document.querySelector(".ele img");
// ele.addEventListener("mouseenter", function(){
//     eleImg.style.opacity = 1;
// });
// ele.addEventListener("mouseleave", function(){
//     eleImg.style.opacity = 0;
// });

// ele.addEventListener("mousemove", function(event){
//     eleImg.style.left = event.x+"px";
//     eleImg.style.top = event.y+"px";
// });