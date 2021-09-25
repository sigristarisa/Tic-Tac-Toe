const createPlayer = (name, marker) => {
  return { name, marker };
};

const GameBoard = (() => {
  // create an array for the grid of the game board
  const gameBoardGrids = [];
  for (let i = 0; i < 9; i++) {
    gameBoardGrids.push("");
  }

  const gameBoard = document.getElementById("gameBoard");

  gameBoardGrids.forEach((element, index) => {
    // add a div to each grid
    const grid = document.createElement("div");
    grid.className = "grid";
    gameBoard.appendChild(grid);

    // make the grid clickable
    grid.addEventListener("click", () => {
      grid.classList.add(Game.activePlayer.marker);
      gameBoardGrids[index] = Game.activePlayer.marker;
      Game.remainingGrid -= 1;

      grid.style.pointerEvents = "none";

      Game.nextPlayer();
    });
  });

  return {
    gameBoardGrids,
  };
})();

const Game = (() => {
  const player1 = createPlayer("Player 1", "x");
  const player2 = createPlayer("Player 2", "o");

  let activePlayer = player1;
  let winnerDeclared = false;
  let remainingGrid = 9;

  // winning conditions
  const winningArray = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  nextPlayer = () => {
    activePlayer === player1
      ? (activePlayer = player2)
      : (activePlayer = player1);
    console.log(activePlayer);
  };

  // gameWon = () => {
  //   winningArray.forEach((item, index) => {
  //     if (
  //       GameBoard.gameBoardGrids[item[0]] === this.activePlayer.marker &&
  //       GameBoard.gameBoardGrids[item[1]] === this.activePlayer.marker &&
  //       GameBoard.gameBoardGrids[item[2]] === this.activePlayer.marker
  //     ) {
  //       this.winnerDeclared = true;
  //       console.log("winner!");
  //     }
  //   });

  return {
    activePlayer,
    remainingGrid,
    nextPlayer,
    // gameWon,
  };
})();
