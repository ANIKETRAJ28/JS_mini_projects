const counterEl = document.querySelector(".counter");

const barEl = document.querySelector(".loading-bar-front");

let idx = 0;

updateNum();

function updateNum() {
  counterEl.innerText = idx + "%";
  barEl.style.width = idx + "%";
  idx++;
  if (idx < 101) {
    setTimeout(updateNum, 20);
  }
}
barEl.style.height = "0.5rem";
barEl.style.backgroundColor = "orange";
barEl.style.borderRadius = "5px";
barEl.style.border = "none";
