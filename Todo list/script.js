let inp = document.querySelector("input");
let addTo = document.querySelector("button");
let par = document.querySelector("ul");

inp.addEventListener("keydown", function (eve) {
    if (eve.key == "Enter") {
        let new_li = document.createElement("li");
        let val = inp.value.trim();
        if (val != "") {
            new_li.innerText = val;
            inp.value = "";

            let del_btn = document.createElement("button");
            del_btn.innerText = "Delete";
            // to add the delete class in del_btn
            del_btn.classList.add("delete");
            new_li.appendChild(del_btn);

            par.appendChild(new_li);
        }
    }

})

addTo.addEventListener("click", function () {
    let new_li = document.createElement("li");
        let val = inp.value.trim();
        if (val != "") {
            new_li.innerText = val;
            inp.value = "";

            let del_btn = document.createElement("button");
            del_btn.innerText = "Delete";
            // to add the delete class in del_btn
            del_btn.classList.add("delete");
            new_li.appendChild(del_btn);

            par.appendChild(new_li);
        }
});

// for deleting the elements by delete btn we cannot directly add event listner for all the li it will delte the predefined/ previous elements not the elements which are added later -> this is called event bubbling
// so we have to add event listner to the ul -> this is called event deligation
par.addEventListener("click", function (event) {
    // event.target.nodeName will return the target which triggered the event
    // here two targets are there which will trigger the event -> li and button
    // so if the target is button then we delete else not
    if (event.target.nodeName == "BUTTON") {
        let parnt = event.target.parentElement;
        parnt.remove();
    }
});