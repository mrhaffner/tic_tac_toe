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




const displayController = (() => {
    let gameStatus;
    let turn = 'X';
    //when both players have a name, run the play? function


    const emptySquares = document.querySelectorAll('.square');
    const resetGame = () => {
        if (!(displayController.gameStatus === undefined)) {
            //log the results before switching the gamestatus
            gameBoard.board = [null, null, null, null, null, null, null, null, null];
            displayController.gameStatus = undefined;
            displayController.turn = 'X';
            //reset the playerNames
            emptySquares.forEach((square) => {
                square.textContent = ''
            })
        }
    };

    const gameState = () => {
        switch(true) {
            case gameBoard.board[0] === 'X' && gameBoard.board[1] === 'X' && gameBoard.board[2] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[3] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[5] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[6] === 'X' && gameBoard.board[7] === 'X' && gameBoard.board[8] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[0] === 'X' && gameBoard.board[3] === 'X' && gameBoard.board[6] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[1] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[7] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[2] === 'X' && gameBoard.board[5] === 'X' && gameBoard.board[8] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[0] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[8] === 'X':
                displayController.gameStatus = 'Win';
                break;
            case gameBoard.board[2] === 'X' && gameBoard.board[4] === 'X' && gameBoard.board[6] === 'X':
                displayController.gameStatus = 'Win';
                break;     
            case gameBoard.board[0] === 'O' && gameBoard.board[1] === 'O' && gameBoard.board[2] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[3] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[5] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[6] === 'O' && gameBoard.board[7] === 'O' && gameBoard.board[8] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[0] === 'O' && gameBoard.board[3] === 'O' && gameBoard.board[6] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[1] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[7] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[2] === 'O' && gameBoard.board[5] === 'O' && gameBoard.board[8] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[0] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[8] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case gameBoard.board[2] === 'O' && gameBoard.board[4] === 'O' && gameBoard.board[6] === 'O':
                displayController.gameStatus = 'Lose';
                break;
            case !gameBoard.board.includes(null):
                displayController.gameStatus = 'Draw';
                break;                                                       
        };
    };

    

    emptySquares.forEach((square) => {
        square.addEventListener('click', () => {
            if (gameBoard.board[+square.dataset.type] === null) {
                square.textContent = displayController.turn
                gameBoard.board[+square.dataset.type] = displayController.turn
                if (displayController.turn === 'O') {
                    displayController.turn = 'X'
                } else {
                    displayController.turn = 'O'
                }
                gameState();
                //Move reset game to it's own button
                //add logic for gamestate to display winner and not let there be any more moves until after reset
                resetGame();
            };
        });
    });
    return { gameStatus, turn, resetGame };
})();




//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display element that congratulates the winning player!

//make sure to alter what the object is returning to minimal upon final draft