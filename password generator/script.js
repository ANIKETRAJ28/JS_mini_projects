const dispPass = document.querySelector(".passBox");
const passCopy = document.querySelector("[passDisplayNumber]");
const passCopyShow = document.querySelector("[passCopy]");
const slider = document.querySelector("[passStrengthSlider]");
const passLen = document.querySelector("[passLengthNumber]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const generatePass = document.querySelector(".generateButton");
const passwordStrengthIndicator = document.querySelector(".strengthIndiacator");
const allCheckbox = document.querySelectorAll('input[type="checkbox"]');
const symbol = "!@#$%^&*?/_-+=:;'{[}]|>.<~`";

let passwordLength = 10;
let password = "";
let checkCount = 0;

function handleSlider() {
  slider.value = passwordLength;
  passLen.innerText = passwordLength;
}
handleSlider();

function changeIndicatorColor(color) {
  passwordStrengthIndicator.style.color = color;
}
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomNumber() {
  return getRandom(0, 9);
}

function generateRandomUppercase() {
  return String.fromCharCode(getRandom(65, 91));
}

function generateRandomLowercase() {
  return String.fromCharCode(getRandom(97, 122));
}

function generateRandomSymbols() {
  const randomNumber = getRandom(0, symbol.length - 1);
  return symbol[randomNumber];
}
2;

function calculateStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  let hasSymbol = false;

  if (uppercase.checked) {
    hasUpper = true;
  }
  if (lowercase.checked) {
    hasLower = true;
  }
  if (numbers.checked) {
    hasNumber = true;
  }
  if (symbol.checked) {
    hasSymbol = true;
  }

  // if (hasNumber && hasLower && hasUpper && hasSymbol && passwordLength >= 8) {
  //   passwordStrengthIndicator("green");
  //   console.log("green");
  // } else if (hasNumber && hasLower && hasUpper && passwordLength >= 6) {
  //   passwordStrengthIndicator("orange");
  //   console.log("orange");
  // } else {
  //   passwordStrengthIndicator("red");
  //   console.log("red");
  // }
}

async function copyClipboard() {
  try {
    await navigator.clipboard.writeText(dispPass.value);
    passCopy.innerText = "copied";
  } catch (e) {
    passCopy.innerText = "falied";
  }

  passCopy.classList.add("active");

  setTimeout(() => {
    passCopy.classList.remove("active");
  }, 2000);
}

allCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckbox);
});

function handleCheckbox() {
  checkCount = 0;
  allCheckbox.forEach((checkbox) => {
    if (checkbox.checked) {
      // console.log("hello");
      checkCount++;
    }
  });

  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
}

function shufflePassword(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  let finalPass = "";
  array.forEach((e) => (finalPass += e));
  return finalPass;
}

slider.addEventListener("input", (e) => {
  passwordLength = e.target.value;
  handleSlider();
});

passCopy.addEventListener("click", () => {
  if (dispPass.value) copyClipboard();
});

generatePass.addEventListener("click", () => {
  allCheckbox.forEach((el) => {
    el.addEventListener("change", handleCheckbox());
  });
  if (checkCount <= 0) return;
  if (passwordLength < checkCount) {
    passwordLength = checkCount;
    handleSlider();
  }
  password = "";
  let funcArr = [];
  if (uppercase.checked) funcArr.push(generateRandomUppercase);
  if (lowercase.checked) funcArr.push(generateRandomLowercase);
  if (numbers.checked) funcArr.push(generateRandomNumber);
  if (symbols.checked) funcArr.push(generateRandomSymbols);

  for (let i = 0; i < funcArr.length; i++) {
    password += funcArr[i]();
  }
  console.log(funcArr.length);

  for (let i = 0; i < passwordLength - funcArr.length; i++) {
    let randomIndex = getRandom(0, funcArr.length);
    password += funcArr[randomIndex]();
  }
  password = shufflePassword(Array.from(password));

  calculateStrength();

  dispPass.value = password;
});
