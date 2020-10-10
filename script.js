const gameBoard = (() => {
    let board = [null, null, null, null, null, null, null, null, null];
    return { board };
})();


//where to actually create the players? maybe inside one of the modules - displayController? or an anonymous function outside a module?
//player1 is always X, player2 is always O
const Player = (name, playerNumber) => {
    const getName = () => name;
    const getPlayerNumber = () => playerNumber;
    return { getName, getPlayerNumber };
};


//win/lose(3 x or 30 in a row

const displayController = (() => {
    let status;
    let turn = 'X';
    //when both players have a name, run the play? function

    const emptySquares = document.querySelectorAll('.square');

    emptySquares.forEach((square) => {
        square.addEventListener('click', () => {
            if (gameBoard.board[+square.dataset.type] === null) {
                square.textContent = turn
                gameBoard.board[+square.dataset.type] = turn
                if (turn === 'O') {
                    turn = 'X'
                } else {
                    turn = 'O'
                }
            }
        })
    })
    //const play = () => {}

    //checking for win/lose/draw
        //should be done after each board update or will it just continuously run????
            //set win condition logic
                //??
                //set each players status to win or lose
                //reset the game
            //loop through gameBoard.board, if (nothing = null && there is no winner) game status sets to draw
                //reset the game
                if (!gameBoard.board.includes(null)) {
                    status = 'Draw';
                };

    //need to reset somewhere
        //status, the players, and the turn, and gameBoard.board needs to be = [null, null, null, null, null, null, null, null, null];

    return { };
})();


//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.


//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display element that congratulates the winning player!