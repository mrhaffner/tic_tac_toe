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
    //need to do something with this, add a screem to enter the names, it goes away once names are entered and you can click on board
        //the reset button will be a next game button
        //there will be another button "new Players" that will reset and bring up the name entry screen
    let playerOne, playerTwo;
    const submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', () => {
        const pOneInput = document.getElementById('player1').value;
        const pTwoInput = document.getElementById('player2').value;
        playerOne = Player(pOneInput, 1)
        playerTwo = Player(pTwoInput, 2)
        console.log(playerOne.getName(), playerTwo.getName())
    })
    

    
    let gameStatus;
    let turn = 'X';
    //when both players have a name, run the play? function


    const emptySquares = document.querySelectorAll('.square');
    const resetGame = () => {
        gameBoard.board = [null, null, null, null, null, null, null, null, null];
        displayController.gameStatus = undefined;
        displayController.turn = 'X';
        //reset the playerNames
        emptySquares.forEach((square) => {
            square.textContent = '';
        })
        results.textContent = '';
    };

    const resetButton = document.getElementById('reset');
    resetButton.addEventListener ('click', () => resetGame());

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

    const results = document.getElementById('results');

    const displayWinner = () => {
        if (!(displayController.gameStatus === undefined)) {
            gameBoard.board = ['no more moves until you reset'];
            results.textContent = displayController.gameStatus;
        }
    }

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
                displayWinner();
            };
        });
    });
    return { gameStatus, turn, resetGame };
})();




//Clean up the interface to allow players to put in their names, 
//add a display element that congratulates the winning player!
//make it so they cannot start game without selecting player names


//make sure to alter what the object is returning to minimal upon final draft