import './assets/css/styles.css';
import Game from "./modules/Game";

const game = new Game();

function restartGame() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.innerHTML = "";
    game.gameOver = false;
    game.playerTime = 0;
    game.board = ["", "", "", "", "", "", "", "", ""];
  });
}

function handleClick(event) {
  let emoji = String.fromCodePoint(0x2694);
  const square = event.target;
  const position = square.id;

  if (game.handleMove(position)) {
    if (game.board[position] === "o") {
      emoji = String.fromCodePoint(0x1F6E1);
    }
    setTimeout(() => {
      alert("It's over - The winner is " + emoji);
      restartGame();
    }, 10);
  }
  
  else if (game.isTied()) {
    setTimeout(() => {
      alert("It's over - A tie.");
      restartGame();
    }, 10);
  }

  updateSquare(position, square);
}

function updateSquare(position, square) {
  const symbol = game.board[position];
  square.innerHTML = `<div class="${symbol}"></div>`;
}

(function() {
  const squares = document.querySelectorAll(".square");
  squares.forEach(square => {
    square.addEventListener("click", handleClick);
  });
})();

(function() {
  const restartBtn = document.getElementById("restart");
  restartBtn.addEventListener("click", restartGame);
})();
