// Player Factory

const initializePlayer = (name, marker) => {
    return {
        name,
        marker
    };
}

// Game Initialization

const gameBoard = (() => {
    let board = ["", "", "", "", "", "", "", "", ""];
    
    // initialize UI
    const gameboard = document.querySelector(".game-board");
    for (let i = 0; i < board.length; i++) {
        const div = document.createElement("div");
        div.classList.add('game-square')
        gameboard.appendChild(div);
    }

    // initalizing Event-Listeners

    // access game squares
    const squares = document.querySelectorAll(".game-square");
    squares.forEach((element, index) => {
        element.addEventListener("click", (event) => {
                if (event.target.textContent.length == 0) {
                    event.target.textContent = game.activePlayer.marker
                    board[index] = game.activePlayer.marker
                    // check winner   
                    game.remainingMoves -= 1;
                    game.checkWin();
                    if (!game.checkWin()) {
                        game.nextPlayer;
                    }
                }
        })})
                // want to get rid of pointer event on squares that have been filled out
                // want to set the respective X or O given the player's turn
                // want to switch the players turn
                // want to have a remaining spots counter


    return {board};

})();

// Game Play

const game = (() => {

    // Players
    const playerOne = initializePlayer("Player 1", "X");
    const playerTwo = initializePlayer("Player 2", "O");

    // Setting Active Players
    let activePlayer = playerOne;
    let remainingMoves = 9;
    let gameOver = false;

    // Need function to announce next player
    const nextPlayer = player => (player === playerOne) ? playerTwo : playerOne;

    // winning combinations:
    const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    
    // need to verify after each move that no one has won -> gameWinning function
    const checkWin = (winningCombinations, player) => {
        for (i = 0; i < winningCombinations.length; i++) {
            if (player.marker === gameBoard.board[i][0] && player.marker === gameBoard.board[i][1] && player.marker === gameBoard.board[i][2]){
                return true
            }
        } return false
    }

    // need to announce game results
    return {
        get activePlayer() {return activePlayer},
        remainingMoves,
        get gameOver () {return gameOver},
        get nextPlayer() {return activePlayer = nextPlayer(activePlayer)},
        checkWin: () => {return gameOver = checkWin(winningCombinations, activePlayer)}
        }

})();