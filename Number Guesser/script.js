let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random * 10);
}

function compareGuesses(human, computer, target) {
    const humanToTarget = Math.abs(human - target);
    const computerToTarget = Math.abs(computer - target);

    if (computerToTarget < humanToTarget) 
        return false;
    return true;
}

function updateScore(winner) {
    if (winner == 'human')
        humanScore += 1;
    else    
        computerScore += 1;
}

function advanceRound() {
    currentRoundNumber += 1;
}
