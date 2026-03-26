// tictactoe game

const cells = document.querySelectorAll(".cell");
const gameStatus = document.querySelector(".status");
const resetBtn = document.querySelector(".reset-btn");
const newBtn = document.querySelector(".new-btn");
const playerXScore = document.querySelector(".player-x-score");
const playerOScore = document.querySelector(".player-o-score");
const drawScore = document.querySelector(".draw-score");
const overlay = document.querySelector(".overlay");

const player1 = "X";
const player2 = "O";

let currentPlayer = player1;

const initializeBoard = () => {
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("winning");
  });
};

const resetGame = () => {
  initializeBoard();
  currentPlayer = player1;
  playerOScore.textContent = "0";
  playerXScore.textContent = "0";
  drawScore.textContent = "0";
  gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
  overlay.style.display = "none";
};

const resetBoard = () => {
  initializeBoard();
  currentPlayer = player1;
  gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
  overlay.style.display = "none";
};

const switchPlayer = () => {
  if (currentPlayer === player1) {
    currentPlayer = player2;
    gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
  } else if (currentPlayer === player2) {
    currentPlayer = player1;
    gameStatus.textContent = `Player ${currentPlayer}'s Turn`;
  }
};

const isValidMove = (e) => {
  if (e.target.textContent === "X" || e.target.textContent === "O") {
    return false;
  }
  return true;
};

const checkWin = () => {
  if (
    (cells[0].textContent === currentPlayer &&
      cells[1].textContent === currentPlayer &&
      cells[2].textContent === currentPlayer) ||
    (cells[3].textContent === currentPlayer &&
      cells[4].textContent === currentPlayer &&
      cells[5].textContent === currentPlayer) ||
    (cells[6].textContent === currentPlayer &&
      cells[7].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer) ||
    (cells[0].textContent === currentPlayer &&
      cells[4].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer) ||
    (cells[2].textContent === currentPlayer &&
      cells[4].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer) ||
    (cells[0].textContent === currentPlayer &&
      cells[3].textContent === currentPlayer &&
      cells[6].textContent === currentPlayer) ||
    (cells[1].textContent === currentPlayer &&
      cells[4].textContent === currentPlayer &&
      cells[7].textContent === currentPlayer) ||
    (cells[2].textContent === currentPlayer &&
      cells[5].textContent === currentPlayer &&
      cells[8].textContent === currentPlayer)
  ) {
    return true;
  }

  return false;
};

const checkDraw = () => {
  let isDraw = true;
  cells.forEach((cell) => {
    if (cell.textContent === "") {
      isDraw = false;
    }
  });
  return isDraw;
};

const playGame = (e) => {
  const hasWin = checkWin();
  const hasDraw = checkDraw();

  if (hasWin) {
    gameStatus.textContent = `Player ${currentPlayer} wins`;
    if (currentPlayer === player1) {
      playerXScore.textContent = parseInt(playerXScore.textContent) + 1;
    } else {
      playerOScore.textContent = parseInt(playerOScore.textContent) + 1;
    }
    e.target.classList.add("winning");
    overlay.style.display = "block";
    return;
  }

  if (hasDraw) {
    gameStatus.textContent = "It's a tie!";
    drawScore.textContent = parseInt(drawScore.textContent) + 1;
    return;
  }
  switchPlayer();
};

cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    const validMove = isValidMove(e);
    if (!validMove) {
      gameStatus.textContent = "not a valid move";
      return;
    }
    e.target.textContent = currentPlayer;
    playGame(e);
  });
});

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetBoard);
