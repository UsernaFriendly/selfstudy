let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    tie: 0
};
let result = "";
function randomizer() {
    let comp = Math.random();
    if (comp < 1 / 3) {
        return 'Rock';
    } else if (comp >= 1 /3 && comp <= 2/3) {
        return 'Paper';
    } else if (comp > 2/3) {
        return 'Scissors';
    }
}

function playGame(playerPick) { 
    let comPick = randomizer();
    let solution = comPick + playerPick;
    if (comPick === playerPick) {
        score.tie++;
        result = "Its a Tie!";
    } else if (solution === 'RockPaper' || solution === 'PaperScissors' || solution === 'ScissorsRock') {
        score.wins++;
        result = "You Win!";
    } else if (solution === 'RockScissors' || solution === 'PaperRock' || solution === 'ScissorsPaper') {
        score.losses++;
        result = "You Lose!";
    }
    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-result-description').innerHTML = `You: <img class="moveicon" src="htmlcss/${playerPick}-emoji.png"> - Computer: <img class="moveicon" src="htmlcss/${comPick}-emoji.png">`;
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}

function reset() {
    score.wins = 0; 
    score.losses = 0; 
    score.tie = 0; 
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerHTML = "";
    document.querySelector('.js-result-description').innerHTML = "";
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.tie}`;
}