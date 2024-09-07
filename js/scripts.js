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
  let squareContainer = document.querySelector(".square-hole");
  squareContainer.innerHTML = "";

  for (let i = 0; i < numberOfSquares; i++) {
    let square = document.createElement("div");

    square.setAttribute("class", "game-square");
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.addEventListener("mouseover", function () {
      square.style.backgroundColor = "red";
    });

    squareContainer.appendChild(square);
  }
}
