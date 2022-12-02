let playerScore = 0;
let computerScore = 0;

/* Function Definitions:


*/

function playRound(playerSelection, computerSelection) {
  // your code here to determine whether playerSelection or computerSelection wins!


  // return the results when there's a draw(playerSelection==computerSelection)
  if (playerSelection.toUpperCase() == computerSelection.toUpperCase()){
    return "Great minds think alike, It's a Draw!"; 
  }

    // return the results when playerSelection is rock(only 2 choices paper or scissors)
  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "PAPER"){
    computerScore = computerScore + 1;
    return "Computer won this round. Better Luck next time!"; 
  }

  if (playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS"){
    playerScore = playerScore + 1;
    return "Congratulations!! You won this round. Play again?";
  }


  // return results when playerSelection is paper
  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK"){
    playerScore = playerScore + 1;
    return "Congratulations!! You won this round. Play again?";
  }

  if (playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "SCISSORS"){
    computerScore = computerScore + 1;
    return "Computer won this round. Better Luck next time!";
  }


  // return results when playerSelection is scissors

  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER"){
    playerScore = playerScore + 1;
    return "Congratulation! You won this round. Play again?";
  }

  if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "ROCK"){
    computerScore = computerScore + 1;
    return "Computer won this round. Better Luck next time!";
  }


}

function getComputerChoice() {
  
  // generate a random number between 1 and 3 and store it
  let number = 1 + Math.floor(Math.random() * 3);

  //return a choice depending upon the random number
  if (number == 1){
    return  "Rock";
  }

  if (number == 2){
    return  "Paper";
  } 

  if (number == 3){
    return  "Scissors";
  } 

}

function game(){

  // want the game to play multiple rounds
  while (computerScore < 2 && playerScore < 2)
  {
    //prompt user input
    let playerSelection = window.prompt("Enter if you dare to the Game of pure skills... or is it luck... Select 'Rock, Paper or Scissors' for your weapon");
    
    //get computerChoice and decide winner
    console.log(playRound(playerSelection, getComputerChoice() ) );
  
      }

  //Report the winner(display the final score of the game... display/alert function) Outside the loop
alert(playerScore());
alert(computerScore());

}
//Main program

game();



