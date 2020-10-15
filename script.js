const gameBoard = (() => {
    let board = [null, null, null, null, null, null, null, null, null];
    return { board };
})();


const Player = (name) => {
    const getName = () => name;
    return { getName };
};




const displayController = (() => {
    let playerOne, playerTwo;
    const playerSelectContainer = document.getElementById('player_select_container');
    const pOneName = document.getElementById('player1_name');
    const pTwoName = document.getElementById('player2_name');
 
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', () => {
        const pOneInput = document.getElementById('player1').value;
        const pTwoInput = document.getElementById('player2').value;
        playerOne = Player(pOneInput)
        playerTwo = Player(pTwoInput)
        pOneName.textContent = playerOne.getName();
        pTwoName.textContent = playerTwo.getName();
        playerSelectContainer.style.display = "none"
    })
    

    const openPlayerSelectBtn = document.getElementById('new_players_button');
    openPlayerSelectBtn.addEventListener('click', () => {
        resetGame()
        playerSelectContainer.style.display = "block";
        pOneName.textContent = "";
        pTwoName.textContent = "";
        document.getElementById('input_form').reset()
    })

    
    let gameStatus;
    let turn = 'X';


    const emptySquares = document.querySelectorAll('.square');
    const resetGame = () => {
        gameBoard.board = [null, null, null, null, null, null, null, null, null];
        displayController.gameStatus = undefined;
        displayController.turn = 'X';
        emptySquares.forEach((square) => {
            square.textContent = '';
        })
        results.textContent = 'Fight!';
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
            if (displayController.gameStatus === 'Lose') {results.textContent = 'O Wins';}
            else if (displayController.gameStatus === 'Win') {results.textContent = 'X Wins';}
            else {results.textContent = 'Draw';}
        }
    }

    emptySquares.forEach((square) => {
        square.addEventListener('click', () => {
            if (gameBoard.board[+square.dataset.type] === null) {
                square.textContent = displayController.turn
                gameBoard.board[+square.dataset.type] = displayController.turn
                if (displayController.turn === 'O') {
                    displayController.turn = 'X';
                    square.style.color = '#FF0099';
                } else {
                    displayController.turn = 'O';
                    square.style.color = '#FF6600';
                }
                gameState();
                displayWinner();
            };
        });
    });
    return { gameStatus, turn };
})();





//make sure to alter what the object is returning to minimal upon final draft
//make a win tally
//update win display