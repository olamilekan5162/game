let humanScore = 0;
let computerScore = 0;

// scores
const pScore = document.querySelector("#p_score");
const cScore = document.querySelector("#c_score");

//rpc frames
const pFrame = document.querySelector("#p_frame");
const cFrame = document.querySelector("#c_frame");

//buttons
const playButtons = document.querySelectorAll(".rpc");
const playAgain = document.querySelector(".new");

//announcement
const winner = document.querySelector(".win");

const rockPaperScissors = ["rock", "paper", "scissors"];
playAgain.hidden = true;

// helper
const setFrame = (frame, player, choice) => {
  frame.src = `../assets/rpc/${player}_${choice}.png`;
};

const getComputerChoice = () => {
  const computerChoice =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
  setFrame(cFrame, "c", computerChoice);
  return computerChoice;
};

const getHumanChoice = (e) => {
  setFrame(pFrame, "p", e);
  return e;
};

const playRound = (humanChoice, computerChoice) => {
  const humanWin =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock");

  if (humanChoice === computerChoice) {
    winner.textContent = "It is a tie!";
  } else if (humanWin) {
    humanScore++;
    pScore.textContent = humanScore;
    winner.textContent = "You won this round";
  } else if (!humanWin) {
    computerScore++;
    cScore.textContent = computerScore;
    winner.textContent = "Computer won this round";
  }
};

const playGame = (e) => {
  if (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(e), getComputerChoice());
  }

  if (humanScore === 5 || computerScore === 5) {
    winner.textContent = `Round Ended, ${
      humanScore === 5 ? "You won!" : "Computer won!"
    }`;
    playAgain.hidden = false;
    playButtons.forEach((rpc) => (rpc.disabled = true));
  }
};

const reset = () => {
  humanScore = 0;
  computerScore = 0;
  pScore.textContent = 0;
  cScore.textContent = 0;
  winner.textContent = "Choose your move!";
  setFrame(pFrame, "p", "rock");
  setFrame(cFrame, "c", "rock");
  playAgain.hidden = true;
  playButtons.forEach((rpc) => (rpc.disabled = false));
};

playButtons.forEach((rpc) => {
  rpc.addEventListener("click", () => playGame(rpc.innerText.toLowerCase()));
});

playAgain.addEventListener("click", reset);
