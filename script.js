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

  // add a div to each grid
  gameBoardGrids.forEach((element, index) => {
    const grid = document.createElement("div");
    grid.className = "grid";
    gameBoard.appendChild(grid);

    // make the grid clickable
    grid.addEventListener("click", () => {
      grid.classList.add(Game.activePlayer.marker);
      // add markers of each player into the array
      gameBoardGrids[index] = Game.activePlayer.marker;
      // count how many grids are left
      Game.remainingGrid -= 1;
      console.log("grid left: ", Game.remainingGrid);
      // make the grid non-clickable after it was once clicked
      grid.style.pointerEvents = "none";

      // check if either player won
      Game.gameWon();

      //if neither player won, then change the turn of the player
      if (!Game.winnerDeclared) {
        if (Game.remainingGrid > 0) {
          Game.nextPlayer();
          console.log(
            "next Player is:",
            Game.activePlayer.name,
            "Marker is:",
            Game.activePlayer.marker
          );
          console.log(gameBoardGrids);
        }
      }
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

  //function to change the turn of the player
  nextPlayer = () => {
    activePlayer === player1
      ? (activePlayer = player2)
      : (activePlayer = player1);
  };

  // function to determine if either player won
  gameWon = () => {
    winningArray.forEach((item) => {
      if (
        GameBoard.gameBoardGrids[item[0]] === activePlayer.marker &&
        GameBoard.gameBoardGrids[item[1]] === activePlayer.marker &&
        GameBoard.gameBoardGrids[item[2]] === activePlayer.marker
      ) {
        winnerDeclared = true;
        console.log("winner!");
      }
    });
  };

  return {
    activePlayer,
    remainingGrid,
    nextPlayer,
    gameWon,
  };
})();
