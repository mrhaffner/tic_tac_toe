//You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
const gameBoard = (() => {
    let board = [null, null, null, null, null, null, null, null, null];
    return { board };
})();

//Your players are also going to be stored in objects

//where to actually create the players? maybe inside one of the modules - displayController? or an anonymous function outside a module?
const Player = (name, playerNumber) => {
    const getName = () => name;
    const getPlayerNumber = () => playerNumber;
    return { getName, getPlayerNumber };
};


//you’re probably going to want an object to control the flow of the game itself

//who's turn - X is first
//game status ongoing or done?
//win/lose(3 x or 30 in a row
//draw (is board full)
const displayController = (() => {
    let turn = 'O'
    //when both players have a name, run the play? function

    const emptySquares = document.querySelectorAll('.square');
    //add eventlistevent on click to all squares that are empty to add the x or o based on who's turn it is
        //update the gameboard Object/array, remove empty class, add full class
        //if turn === x, turn3 = o else turn = x
        //rerun function until win condition?

    //or would it be easier to add event listener on click, check the status of the gameboard then update it with x or o, depending on the turn, or do nothing if the spot in gameboard is full?
        //loop through gameBoard.board - 
        //+x.dataset.type    will give data-type of of DOM element that correspnds to gameBoard.board's index number

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
                //console.log(+square.dataset.type)
                //square.textContent = 'O'
            })
        })
    const play = () => {
        
    }

    //remove full class from all squares and add empty class at end of game
    //or just reset all squares

    return { emptySquares, turn };
})();


//Try tucking everything away inside of a module or factory. Rule of thumb: 
//if you only ever need ONE of something (gameBoard, displayController), use a module. 
//If you need multiples of something (players!), create them with factories.



//Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage 
//(for now you can just manually fill in the array with "X"s and "O"s)
//let square1, square2, square3, square4, square5, square6, square7, square8, square9; 
//for (let i = 1; i < 10; i++) {
//    `square${i}` = document.getElementById(`square${i}`);
//};

//Build the functions that allow players to add marks to a specific spot on the board, 
//and then tie it to the DOM, letting players click on the gameboard to place their marker. 
//Don’t forget the logic that keeps players from playing in spots that are already taken!
    //Think carefully about where each bit of logic should reside. 
    //Each little piece of functionality should be able to fit in the game, player or gameboard objects.. 
    //but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!

//Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.



//Clean up the interface to allow players to put in their names, 
//include a button to start/restart the game and add a display element that congratulates the winning player!