const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || 'paper' || 'scissors' || 'bomb'){
        return userInput;
    } else{
        console.log('Je moet wel steen papier of schaar kiezen');
    }
};
function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0 :
            return 'rock';
        case 1 :
            return 'paper';
        case 2 :
            return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice){
    if(userChoice === computerChoice){
        return 'Het is een gelijkspel';
    }
    if(userChoice === 'rock'){
        if(computerChoice === 'paper'){
            return 'De computer heeft gewonnen!'
        } else{
            return 'U heeft gewonnen!'
        }
    }
    if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
            return 'De computer heeft gewonnen!';
        } else{
            return 'U heeft gewonnen!';
        }
        if(userChoice === 'scissors'){
            if(computerChoice === 'rock'){
                return 'De computer heeft gewonnen!';
            } else{
                return 'U heeft gewonnen!';
            }
        }
    }
    if (userChoice === 'bomb'){
        return 'U heeft gewonnen!';
    }
}

    const playGame = () =>{
        const userChoice = getUserChoice('bomb');
        const computerChoice = getComputerChoice();

        console.log(`Jij koos: ${userChoice}`);
        console.log(`De computer koos: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
    }

    playGame();