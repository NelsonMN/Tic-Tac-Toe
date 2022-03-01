// Player Factory

const player = (character) => {
    return {character};
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
                // want to get rid of pointer events
                // want to ensure that you can't click it again
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
    const playerOne = player("X")
    const playerTwo = player("O")


}


// Display Controller