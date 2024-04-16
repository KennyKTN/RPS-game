
//Define var
let choice = ["ROCK","PAPER","SCISSOR"];

function getComputerChoice() {
    return choice[Math.floor(Math.random()* choice.length)];
}
let result = ["You win","You lose","It's a draw"];

//Output
function game(playerSelection,computerSelection) {
    //print outcome
    console.log("Computer plays "+computerSelection);
    console.log ("You play " +playerSelection);
    
    //calculation
    if (playerSelection ==="ROCK"){
        if(computerSelection === "PAPER"){
            return result[1];
        }
        else if(computerSelection ==="ROCK"){
            return result[2];
        }
        else {
            return result[0];
        }}    
        else if (playerSelection ==="PAPER"){
            if(computerSelection ==="SCISSOR"){
                return result[1];
            }
            else if(computerSelection ==="PAPER"){
                return result[2];
            }
            else {
                return result[0];
            }}
            else if (playerSelection ==="SCISSOR"){
                if(computerSelection ==="SCISSOR"){
                    return result[2];
                }
                else if(computerSelection ==="PAPER"){
                    return result[0];
                }
                else {
                    return result[1];
                }        
            }
        }

//Run game

function playRound() {
    let playerSelection;
    let isValidChoice = false;
    //Infinite loop until the player input within choice
    while (!isValidChoice) {
        playerSelection = prompt("GO").toUpperCase();
        
        if (choice.includes(playerSelection)){
            isValidChoice = true;
        }
        else {
            console.log("Invalid value please re enter");
        }
    }      
    let computerSelection = getComputerChoice();
    let roundResult = game(playerSelection, computerSelection);
    console.log(roundResult);
    return roundResult;
}

// Function to play 5 rounds of the game
function playGame() {
    let score = 0;
    let cscore = 0;
    let round = 0;
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        if (roundResult === "You win") {
            score+= 1;
            round++;
        }
        else if (roundResult === "It's a draw") {
            round++;
        }
        else {
            round++;
            cscore+=1;
        }
        console.log("Your score is " + score);
        console.log("Computer score is " + cscore);
    }
    if (score > cscore) {
        console.log("Final result: you win by "+ (score - cscore) +((score - cscore) > 1 ?
        " points" :" point"));
    }
    else if (score <cscore) {
        console.log("Final result: you lose by "+ (cscore - score) + ((cscore - score) > 1 ?
        " points" :" point"));
    }
    else {
        console.log("Final result: Draw!!!")
    }
    
    
}
console.log (playGame())
      




   
        
        

