const squareDiv = document.createElement("div");
squareDiv.setAttribute("class", "square-div");

const container = document.getElementById("grid-container");
const gridButton = document.querySelector(".grid-button");
const breakTag = document.createElement("br");

for (let i = 0; i < 30; i++) {
  for (let i = 0; i < 30; i++) {
    container.appendChild(squareDiv.cloneNode(true));
  }
  for (let i = 0; i < 1; i++) {
    container.appendChild(breakTag.cloneNode(true));
  }
}

function generateRandomColor() {
  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hexColor = "#";

  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
  }
  return hexColor;
}

function getRandomNum() {
  return Math.floor(Math.random() * 256);
}

function setBackgroundColor() {
  let allOfEm = document.querySelectorAll(".square-div");
  for (let a = 0; a < allOfEm.length; a++) {
    allOfEm[a].style.backgroundColor = "";
  }
}

setBackgroundColor();

function backgroundColorChange() {
  let squareArray = document.querySelectorAll(".square-div");
  //let j = 1;
  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i].addEventListener("mouseenter", function (event) {
      event.target.style.backgroundColor = generateRandomColor();
    });
    squareArray[i].addEventListener("mouseleave", function (event) {
      event.target.style.backgroundColor = generateRandomColor();
    });
  }
}

backgroundColorChange();

let globalLength = container.children.length;

setInterval(() => {
  let length = container.children.length;
  if (length !== globalLength) {
    backgroundColorChange();
    //setBackgroundColor();
    globalLength = length;
  }
}, 1000);

gridButton.addEventListener("click", function () {
  const allSquareDiv = document.querySelectorAll(".square-div");
  const allBreaks = document.querySelectorAll("br");
  let j = 0;
  while (j < allBreaks.length) {
    container.removeChild(allBreaks[j]);
    j++;
  }
  let i = 0;
  while (i < allSquareDiv.length) {
    container.removeChild(allSquareDiv[i]);
    i++;
  }

  let person = prompt(
    "Enter how many squares per side for a new grid. (Maximum value is 100)"
  );
  while (person > 100) {
    person = prompt(
      "maximum value exceeded! please re-enter a value below or equal to 100."
    );
  }
  for (let i = 0; i < person; i++) {
    for (let i = 0; i < person; i++) {
      container.appendChild(squareDiv.cloneNode(true));
    }
    for (let i = 0; i < 1; i++) {
      container.appendChild(breakTag.cloneNode(true));
    }
  }
});
