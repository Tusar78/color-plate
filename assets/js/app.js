// Maked Id Selector
const selectorId = (id) => {
  return document.getElementById(id);
};

// All of references
const body = document.querySelector("body");

// Orientations Reference
const orRight = selectorId("or-right");
const orLeft = selectorId("or-left");
const orDown = selectorId("or-down");
const orUp = selectorId("or-up");

// Input Reference
const inputOne = selectorId("input-one");
const inputTwo = selectorId("input-two");

// Generate Btn
const generateBtn = selectorId("generate-btn");

// CSS Code
const cssCode = selectorId("css-code");

// Hex Code Generator
const hexGenerator = () => {
  let possibleCode = "0123456789ABCDEF";
  let hexCode = "#";
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 16);
    hexCode += possibleCode[randomNumber];
  }
  return hexCode;
};

const generate = () => {
  let hexOne = hexGenerator();
  let hexTwo = hexGenerator();
  body.style.backgroundImage = `linear-gradient(to right, ${hexOne}, ${hexTwo}`;
  inputOne.value = `${hexOne}`;
  inputTwo.value = `${hexTwo}`;
};

generateBtn.addEventListener("click", generate);