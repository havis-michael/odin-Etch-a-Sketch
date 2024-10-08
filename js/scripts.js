window.addEventListener("load", function () {
  createSquares(16);
});

let newGameButton = document.querySelector(".new-game-button");
const gameBoardWidth = 960;

newGameButton.addEventListener("click", function () {
  let gridWidth = prompt("How wide should the grid be?");
  if (gridWidth === null || gridWidth < 1) {
    return;
  }

  createSquares(gridWidth);
});

function createSquares(gridDimensions) {
  if (gridDimensions > 100) {
    alert("The maximum grid width allowed is 100.");
    return;
  }

  let numberOfSquares = gridDimensions ** 2;
  let squareSize = `${gameBoardWidth / gridDimensions}px`;
  let squareBackgroundColor = "rgb(211, 211, 211)";
  let squareOpacity = 0.1;

  let squareContainer = document.querySelector(".square-hole");
  squareContainer.innerHTML = "";

  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");

    square.setAttribute("class", "game-square");
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.style.backgroundColor = squareBackgroundColor;
    square.style.opacity = squareOpacity;

    square.addEventListener("mouseover", function () {
      let currentBackgroundColor = square.style.backgroundColor;
      let currentOpacity = square.style.opacity;

      let red = Math.floor(Math.random() * 256);
      let blue = Math.floor(Math.random() * 256);
      let green = Math.floor(Math.random() * 256);
      let newBackgroundColor = `rgb( ${red}, ${blue}, ${green})`;
      let newOpacity = +currentOpacity + 0.1;

      currentBackgroundColor == squareBackgroundColor
        ? (square.style.backgroundColor = newBackgroundColor)
        : "";

      square.style.opacity = newOpacity;
    });

    squareContainer.appendChild(square);
  }
}
