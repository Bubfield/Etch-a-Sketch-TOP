const squareDiv = document.createElement("div");
squareDiv.setAttribute("class", "square-div");

const container = document.getElementById("grid-container");
const gridButton = document.querySelector(".grid-button");
const breakTag = document.createElement("br");

for (let i = 0; i < 16; i++) {
  for (let i = 0; i < 16; i++) {
    container.appendChild(squareDiv.cloneNode(true));
  }
  for (let i = 0; i < 1; i++) {
    container.appendChild(breakTag.cloneNode(true));
  }
}

/*setInterval(() => {
  let breaktags = document.querySelectorAll("br");
  console.log(container.children.length - breaktags.length);
}, 1000);*/

let squareArray = document.querySelectorAll(".square-div");
for (let i = 0; i < squareArray.length; i++) {
  squareArray[i].addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = "red";
  });
  squareArray[i].addEventListener("mouseleave", function (event) {
    event.target.style.backgroundColor = "blue";
  });
}

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
