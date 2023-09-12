let istatus = document.querySelector('h5');
let btn = document.querySelector('#btn');
// let remove = document.querySelector('#remove');
let check = 0;

btn.addEventListener('click', function(){
    if(check == 0){
        istatus.innerHTML = 'Friends';
        istatus.style.color = "cadetblue";
        btn.innerHTML = 'Remove';
        btn.style.backgroundColor = '#bcbaba';
        btn.style.color = 'black';
        check = 1;
    }
    else{
        istatus.innerHTML = 'Stranger';
        istatus.style.color = '#bcbaba';
        btn.innerHTML = 'Add Friends';
        btn.style.backgroundColor = 'cadetblue';
        btn.style.color = '#ffffff';
        check = 0;
    }
});

// remove.addEventListener('click', function(){
//     istatus.innerHTML = 'Stranger';
//     istatus.style.color = 'blue';
// })