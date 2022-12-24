class Game {
  constructor() {
    this.board = ["", "", "", "", "", "", "", "", ""];
    this.playerTime = 0;
    this.symbols = ["x", "o"];
    this.gameOver = false;
    this.winStates = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
  }

  handleMove(position) {
    if (this.gameOver) return;
  
    if (this.board[position] === "") {
      this.board[position] = this.symbols[this.playerTime];
      this.gameOver = this.isWin();
  
      this.playerTime = (this.playerTime === 0) ? 1 : 0;
    }
    return this.gameOver;
  }

  isWin() {
    for (let ws of this.winStates) {
      const seq = ws;
  
      const pos1 = seq[0];
      const pos2 = seq[1];
      const pos3 = seq[2];
  
      if (
        this.board[pos1] === this.board[pos2] && 
        this.board[pos1] === this.board[pos3] && 
        this.board[pos1] !== ""
      ) {
        return true;
      }
    }
    return false;
  }

  isTied() {
    let tied = true;
    let i = 0;
    while (tied && i < this.board.length) {
      if (this.board[i] === "") {
        tied = false;
      }
      i++;
    }
    return tied;
  }
}

export default Game;
