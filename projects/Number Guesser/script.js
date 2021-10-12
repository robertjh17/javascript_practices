let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
        return Math.floor(Math.random() * 9);
}

const compareGuesses = (human, computer, secret) => {
    const humanNumber = Math.abs(human- secret) ;
    const computerNumber = Math.abs(computer - secret);


    if (humanNumber < computerNumber){
        return true;
    } else {
        return false;
    }
}

const updateScore = winner => {
  if (winner === 'human'){
      humanScore += 1;
  } else {
      computerScore += 1;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}