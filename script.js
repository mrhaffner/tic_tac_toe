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
    let gameStatus;
    let turn = 'X';
    //when both players have a name, run the play? function

    //checking for win/lose/draw
    //should be done after each board update or will it just continuously run????
        //set win condition logic
            //??
            //set each players status to win or lose
            //make a switch for X and a switch for O
            //8 ways to win
            //put the switch in a function to run on whatever event
                //function will reset the game if gameStatus is not undefined/null
                    //status, the players, and the turn, and gameBoard.board needs to be = [null, null, null, null, null, null, null, null, null];
            //gameStatus will refer to player1

    const resetGame = () => {
        if (!gameStatus === undefined) {
            //log the results before switching the gamestatus
            gameBoard.board = [null, null, null, null, null, null, null, null, null];
            //maybe this should happen from within the gameboard object - addan event listener on on click, check the game status?
            gameStatus = undefined;
            turn = 'X';
            //reset the playerNames

            //reset the square displays
            emptySquares.forEach((square) => {
                square.textContent = ''
            })
        }
    };

    const gameState = () => {
        switch(true) {
            case gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X':
                gameStatus = 'Win';
                break;
            case gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X':
                gameStatus = 'Win';
                break;     
            case gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O':
                gameStatus = 'Lose';
                break;
            case gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O':
                gameStatus = 'Lose';
                break;
            case !gameBoard.board.includes(null):
                gameStatus = 'Draw';
                break;                                                       
        };
    };

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
                //this shit isn't working
                gameState();
                resetGame();
            };
        });
    });
    //const play = () => {}


    

    return { gameStatus, turn, resetGame };
})();


//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.


//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display element that congratulates the winning player!