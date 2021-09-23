const Player = (name) => {
  return { name };
};

const GameBoard = (() => {
  // create an array for the grid of the game board
  const gameBoardGrids = [];
  for (let i = 0; i < 9; i++) {
    gameBoardGrids.push("");
  }

  const gameBoard = document.getElementById("gameBoard");

  gameBoardGrids.forEach((element) => {
    const grid = document.createElement("div");
    grid.className = "grid";
    gameBoard.appendChild(grid);
    grid.addEventListener("click", () => {
      console.log("I'm clickable!");
    });
  });
})();
