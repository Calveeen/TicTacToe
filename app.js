const Player = (firstName, lastName) => {
    return {firstName, lastName};
}

function gameBoard(){
    let board = [];
    for(let i=0; i<9; i++){
        board.push(i);
    }
    return board;
};

function goX(){
    const playerOne = Player("Penor", "Galore");
    const playerTwo = Player("Fuckboy", "Mcgee");
    playerOne.num = Math.floor(Math.random()*6969);
    playerTwo.num = Math.floor(Math.random()*6969);
    console.log("hi");

    if(playerOne.num > playerTwo.num){
        playerOne.shape = "X";
        playerTwo.shape = "O";
    } else{
        playerOne.shape = "O";
        playerTwo.shape = "X";
    }

    return {playerOne, playerTwo};
}

(function logic(){
    const getCells = document.querySelectorAll("td");
    const cellArr = Array.from(getCells);
    const getBtn = document.querySelector(".restart-btn");
    const getShape = document.querySelectorAll(".players p");
    const shapeArr = [...getShape];
    let board = gameBoard();
    let players = goX();
    const player1 = players.playerOne;
    const player2 = players.playerTwo;

    //Restart button
    getBtn.addEventListener("click", () => {
        for(let i=0; i<cellArr.length; i++){
            cellArr[i].innerHTML = "";
            cellArr[i].style.backgroundColor = "white";
            board = gameBoard();
        }
        console.log("Pig");
        logic();
    }, {once: true});
    /*Restart button calls itself exponentially more, therefore use {once: true} at the 
    end of the call*/
    
    //display shapes on board
    if(player1.shape == "X"){
        player1.turn = 1;
        player2.turn = 2;
        console.log("Player one goes first.");
        console.log("-----")
        shapeArr[0].innerHTML = "X";
        shapeArr[1].innerHTML = "O";
    } else{
        player1.turn = 2;
        player2.turn = 1;
        console.log("Player two goes first.");
        console.log("-----")
        shapeArr[0].innerHTML = "O";
        shapeArr[1].innerHTML = "X";
    }

    for(let i=0; i<cellArr.length; i++){       
        cellArr[i].addEventListener("click", (e) =>{    
            if(cellArr[i].innerHTML == ""){
                if(player1.turn == 1){
                    e.target.innerHTML = "X";
                    e.target.style.backgroundColor = "gray"; 
                    player1.turn = 2;
                    player2.turn = 1;
                    board[i] = "X";
                    
                } else{
                    e.target.innerHTML = "O";
                    e.target.style.backgroundColor = "lightgray"; 
                    player1.turn = 1;
                    player2.turn = 2;
                    board[i] = "O";
                }
            }
            //check win

            //horizontally
            for(let i=0; i<9; i+=3){
                if(board[i] == board[i+1] && board[i+1] == board[i+2]){
                    if(board[i] == player1.shape){
                        console.log("Player one wins");
                    } else{
                        console.log("Player two wins")
                    }
                    
                }
            }

            //vertically
            for(let j=0; j<3; j++){
                if(board[j] == board[j+3] && board[j+3] == board[j+6]){
                    if(board[j] == player1.shape){
                        console.log("Player one wins");
                    } else{
                        console.log("Player two wins")
                    }
                }
            }

            //diagonally
            if(board[0] == board[4] && board[4] == board[8]){
                if(board[0] == player1.shape){
                    console.log("Player one wins");
                } else{
                    console.log("Player two wins")
                }

                
            }

            if(board[2] == board[4] && board[4] == board[6]){
                if(board[0] == player1.shape){
                    console.log("Player one wins");
                } else{
                    console.log("Player two wins")
                }
            }
        });        
    }
})();