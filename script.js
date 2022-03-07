// Player Factory

const initializePlayer = (name, marker) => {
    return {name, marker};
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

    // Access game squares
    const squares = document.querySelectorAll(".game-square");

    // Adding Event Listener
    squares.forEach((square, index) => {
        square.addEventListener("click", (event) => {
                if (event.target.textContent.length == 0 && !game.getGameOver()) {
                    event.target.textContent = game.getActivePlayer().marker
                    board[index] = game.getActivePlayer().marker
                    game.remainingMoves -= 1;
                    game.getCheckWin()
                    if (!game.gameOver) {
                        if (game.remainingMoves > 0) {
                            game.getNextPlayer();
                        } else if (game.remainingMoves == 0) {
                            console.log("Draw")
                    }
                    }}})})
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
    const nextPlayer = player => (player === playerOne) ? activePlayer = playerTwo : activePlayer = playerOne;

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
            const combo = winningCombinations[i];
            if (player.marker === gameBoard.board[[combo[0]]] 
                && player.marker === gameBoard.board[[combo[1]]] 
                && player.marker === gameBoard.board[[combo[2]]]) {
                console.log(`${player.name} wins!`)
                return true
            }
        } return false
    }
    
    const getActivePlayer = () => activePlayer
    const getGameOver = () => gameOver
    const getNextPlayer = () => activePlayer = nextPlayer(activePlayer)
    const getCheckWin = () => gameOver = checkWin(winningCombinations, activePlayer)


    // need to announce game results
    // return {
    //     get activePlayer() {return activePlayer},
    //     remainingMoves,
    //     get gameOver () {return gameOver},
    //     get nextPlayer() {return activePlayer = nextPlayer(activePlayer)},
    //     get checkWin() {return gameOver = checkWin(winningCombinations, activePlayer)}
    //     }
    return {
        getActivePlayer,
        remainingMoves,
        getGameOver,
        getNextPlayer,
        getCheckWin,
        }
})();