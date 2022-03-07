// Game and Board;
const game = (()=> {

    const gameBoard = (() => {
        board = ["", "", "", "", "", "", "", "", ""]
        
        // Board UI:
        const gameboard = document.querySelector(".game-board");
        for (let i = 0; i < board.length; i++) {
            const div = document.createElement("div");
            div.classList.add('game-square')
            gameboard.appendChild(div);
    }

        // Game Play:
        const squares = document.querySelectorAll(".game-square")
        squares.forEach((square, index) => {
            square.addEventListener("click", event => {
                if (event.target.textContent.length == 0 && !gameOver) {
                    event.target.textContent = activePlayer.marker
                    board[index] = activePlayer.marker
                    remainingMoves -= 1;
                    checkWin()
                    if (!gameOver) {
                        if (remainingMoves > 0) {
                            nextPlayer()
                            currentPlayer()
                        } else if (remainingMoves == 0) {
                            resultsDisplay.textContent = `Draw!`
                        }
                    }
                }
            })
        })

        const againButton = document.getElementById("play-again");
        againButton.addEventListener("click", () => {
                squares.forEach((square, index) => {
                    square.textContent = "";
                    board[index] = "";
                    activePlayer = playerOne;
                    remainingMoves = 9;
                    gameOver = false;
                    resultsDisplay.textContent = ""
                    playerDisplay.textContent = ""
                }
            )})
        

        return {board}

    })()

    // Player Factory
    const player = (name, marker) => {
        return {name, marker}
    }

    const playerOne = player("Player 1", "X");
    const playerTwo = player("Player 2", "O");

    // Results Display
    const resultsDisplay = document.getElementById("results");
    const playerDisplay = document.getElementById("player");

    // Initial Variables
    let activePlayer = playerOne;
    let remainingMoves = 9;
    let gameOver = false;

    const nextPlayer = () => activePlayer == playerOne ? activePlayer = playerTwo : activePlayer = playerOne

    const currentPlayer = () => playerDisplay.textContent = `${activePlayer.name}'s turn!`

    const checkWin = () => {

        const winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (i = 0; i < winningCombinations.length; i++) {
            const combo = winningCombinations[i];
            if (activePlayer.marker === gameBoard.board[[combo[0]]] 
                && activePlayer.marker === gameBoard.board[[combo[1]]] 
                && activePlayer.marker === gameBoard.board[[combo[2]]]) {
                    resultsDisplay.textContent = `${activePlayer.name} wins!`
                    gameOver = true
                    return true
            }
        } return false
    }
    
    return {checkWin, nextPlayer, currentPlayer}
    
})();