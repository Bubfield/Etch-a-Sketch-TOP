const squareDiv = document.createElement("div");
squareDiv.setAttribute("class", "square-div");

const container = document.getElementById("grid-container");
const gridButton = document.querySelector(".grid-button");

for (let i = 0; i < 256; i++) {
  container.appendChild(squareDiv.cloneNode(true));
}

gridButton.addEventListener("click", function () {
  /*let person = prompt("Enter how many squares per side for a new grid.");
  for (let i = 0; i < person; i++) {
    container.appendChild(squareDiv.cloneNode(true));
  }*/
});
