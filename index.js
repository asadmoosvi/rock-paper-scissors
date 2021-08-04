function computerPlay() {
  let values = ['Rock', 'Paper', 'Scissors'];
  let randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();

  let winner;
  if (playerSelection === 'rock') {
    if (computerSelection === 'scissors') {
      winner = 'player';
    } else if (computerSelection === 'paper') {
      winner = 'computer';
    } else {
      winner = 'tie';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'rock') {
      winner = 'player';
    } else if (computerSelection === 'scissors') {
      winner = 'computer';
    } else {
      winner = 'tie';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'paper') {
      winner = 'player';
    } else if (computerSelection === 'rock') {
      winner = 'computer';
    } else {
      winner = 'tie';
    }
  }

  let result = {};
  if (winner === 'tie') {
    result.message = `It's a tie! Both players picked ${playerSelection}.`;
    result.winner = null;
  } else {
    if (winner === 'player') {
      result.message = `You WIN! Your ${playerSelection} beats computer's ${computerSelection}.`;
      result.winner = 'player';
    } else {
      result.message = `You LOSE! Your ${playerSelection} loses to computer's ${computerSelection}. Better luck next time. :(`;
      result.winner = 'computer';
    }
  }
  return result;
}

function isValidValue(value) {
  value = value.toLowerCase().trim();
  return value == 'rock' || value == 'paper' || value == 'scissors';
}

function game() {
  let playerScore = 0,
    computerScore = 0;
  let rounds = 5;
  let playerChoice;
  let result;
  alert(
    'This is a Rock, Paper, Scissors game VS the computer. 5 rounds total.'
  );
  for (let i = 1; i <= rounds; i++) {
    do {
      alert(`Round ${i}`);
      playerChoice = prompt('Rock, paper, or scissors?');
      if (!isValidValue(playerChoice)) {
        alert(`'${playerChoice}' is not a valid value`);
      }
    } while (!isValidValue(playerChoice));
    result = playRound(playerChoice, computerPlay());
    alert(result.message);
    if (result.winner === 'player') {
      playerScore++;
    } else if (result.winner === 'computer') {
      computerScore++;
    }
  }
  console.log(`%c *** Final Results ***`, 'font-weight: bold;');
  console.log(
    `Computer Points: ${computerScore}\nPlayer Points: ${playerScore}`
  );
  if (playerScore > computerScore) {
    console.log(
      '%c You win the game!',
      'background: green; color: white; font-weight: bold'
    );
  } else if (computerScore > playerScore) {
    console.log(
      '%c Computer wins the game!',
      'background: red; color: white; font-weight: bold'
    );
  } else {
    console.log(
      "%c It's a tie!",
      'background: black; color: white; font-weight: bold'
    );
  }
}

game();
