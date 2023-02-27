function grabDOMelements() {
  const gridContainer = document.getElementById("grid-container");
  const gridButton = document.querySelector(".grid-button");
  return {gridContainer, gridButton};
}
function createDOMelements() {
  const squareDiv = document.createElement("div");
  squareDiv.setAttribute("class", "square-div");
  return {squareDiv};
}

const squareDiv = document.createElement("div");
squareDiv.setAttribute("class", "square-div");
const gridContainer = document.getElementById("grid-container");
const gridButton = document.querySelector(".grid-button");

function onAppStart() {
  function generateStartingGrid() {
    let startingSize = 20;
    for (let i = 0; i < startingSize ** 2; i++) {
      gridContainer.appendChild(squareDiv.cloneNode(true));
    }
  }

  function addEventListenerToSquareDivs() {
    let allSquareDivs = document.querySelectorAll(".square-div");

    function changeSquareDivsBackgroundColor(e) {
      function generateRandomHexColor() {
        const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

        function createRandomIndex() {
          return Math.floor(Math.random() * hexArray.length);
        }

        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
          hexColor += hexArray[createRandomIndex()];
        }

        return hexColor;
      }
      e.target.style.backgroundColor = generateRandomHexColor();
    }

    for (let i = 0; i < allSquareDivs.length; i++) {
      allSquareDivs[i].addEventListener("mouseenter", (e) =>
        changeSquareDivsBackgroundColor(e)
      );
      allSquareDivs[i].addEventListener("mouseleave", (e) =>
        changeSquareDivsBackgroundColor(e)
      );
    }
  }

  function addEventListenerToChangeGridSize() {
    function changeGridSize() {
      function clearGridContainer() {
        gridContainer.textContent = "";
      }

      function getNewGridSize() {
        let newGridSize = prompt(
          "Enter how many squares per side for a new grid. (Maximum value is 100, minimum is 2)"
        );
        let numbersOnlyRegex = /^\d+$/;
        while (
          newGridSize > 100 ||
          newGridSize < 2 ||
          !newGridSize.match(numbersOnlyRegex)
        ) {
          newGridSize = prompt(
            "Invalid value! Only number values between 2 and 100 are acceptable!"
          );
        }

        return newGridSize;
      }

      function generateNewGrid(newSize) {
        for (let i = 0; i < newSize * newSize; i++) {
          gridContainer.appendChild(squareDiv.cloneNode(true));
        }
      }

      clearGridContainer();
      const newSize = getNewGridSize();
      generateNewGrid(newSize);
      addEventListenerToSquareDivs();
    }

    gridButton.addEventListener("click", changeGridSize);
  }

  generateStartingGrid();
  addEventListenerToSquareDivs();
  addEventListenerToChangeGridSize();
}

onAppStart();
