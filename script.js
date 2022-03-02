// Player Factory

const player = (name, marker) => {
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
    const squares = document.querySelectorAll(".game-square");
    squares.forEach((element, index) => {
        element.addEventListener("click", (event) => {
                console.log(event.target) // use this to change the inner HTML
                console.log(index) // use this to relate back to the game board data
                if (event.target.textContent.length = 0) {
                    event.target.textContent = activePlayer.marker
                }
                // want to get rid of pointer event on squares that have been filled out
                // want to set the respective X or O given the player's turn
                // want to switch the players turn
                // want to have a remaining spots counter
        })
    })


    return {board};
})();

// Game Play

const game = () => {
    // Players
    const playerOne = player("Player One", "X")
    const playerTwo = player("Player Two", "O")

    // activePlayer will refer to playerOne.name
    // activePlayer.marker will refer to either playerOne.marker or playerTwo.marker

    // There can only be 9 moves => initialize a counter from 9 -> 0

    // need to verify after each move that no one has won -> gameWinning function
    // winning combinations:
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
}


// Display Controller