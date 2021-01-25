//query selectors
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const scoreBox = document.querySelector('.score-box');
const questionMark = document.querySelector('.question-mark')
const compSelect = document.querySelector ('.computerOutputBox');
const playerScoreBox = document.querySelector('.playerscorebox');
const computerScoreBox = document.querySelector('.computerscorebox');





let playerScore = 0;
let computerScore = 0;
let round = 0;
let question = '';
let playerSelection = '';
let computerSelection = '';
let selection = '';
let choices = [];


function computerPlay(){
    let x = Math.floor(Math.random() *3+1);
    switch (x) {
    case 1:
    x = 'rock';
    break;
    case 2:
    x = 'paper';
    break;
    case 3:
    x = 'scissor';
    break;
    }
    return x
    
  } 

rockBtn.addEventListener('click', function(e){
    game();
    selection = 'rock';
    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay(); 

    questionMark.style.display = "none";
    const p2 = document.createElement('p');
    p2.appendChild(document.createTextNode(computerSelection.toUpperCase()));
    compSelect.appendChild(p2);




    if (playerSelection === computerSelection){
      round+=1;
      choices.push(1);
      scoreBox.style.color = "blue";
      const p = document.createElement('p');
      p.appendChild(document.createTextNode((`${playerSelection} tied ${computerSelection}
      Player: ${playerScore} 
      Computer: ${computerScore}
      Round:${round}`)));
      scoreBox.appendChild(p);
      updatePlayerScore();
      updateComputerScore();
      return(`${playerSelection} tied ${computerSelection}
      Player: ${playerScore} 
      Computer: ${computerScore}
      Round:${round}`);






    }else if (playerSelection === 'rock' && computerSelection === 'scissor'||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissor' && computerSelection === 'paper'){

        
       round += 1;           
       playerScore+=1;
       choices.push(1);
       scoreBox.style.color = "green";
       const p3 = document.createElement('p');
       p3.appendChild(document.createTextNode(`${playerSelection} beats ${computerSelection} 
       Player score: ${playerScore} 
       Computer score: ${computerScore} 
       Round:${round}`));
       scoreBox.appendChild(p3);        
       updatePlayerScore();
       updateComputerScore();
       return(`${playerSelection} beats ${computerSelection} 
       Player score: ${playerScore} 
       Computer score: ${computerScore} 
       Round:${round}`);




    } else {
      round += 1;
      computerScore+=1;
      choices.push(1);
      scoreBox.style.color = "red";
      const p4 = document.createElement('p');
       p4.appendChild(document.createTextNode(`${computerSelection} beats ${playerSelection}
       Computer score ${computerScore} 
       Player Score: ${playerScore} 
       Round:${round}`));
       scoreBox.appendChild(p4); 
       updatePlayerScore();
       updateComputerScore();
      return(`${computerSelection} beats ${playerSelection}
      Computer score ${computerScore} 
      Player Score: ${playerScore} 
      Round:${round}`);
    }
  });


paperBtn.addEventListener('click', function(e){
  game();
  selection = 'paper';
  playerSelection = selection.toLowerCase();
  computerSelection = computerPlay(); 

  questionMark.style.display = "none";
  const p2 = document.createElement('p');
  p2.appendChild(document.createTextNode(computerSelection.toUpperCase()));
  compSelect.appendChild(p2);




  if (playerSelection === computerSelection){
    round+=1;
    choices.push(1);
    scoreBox.style.color = "blue";
    const p = document.createElement('p');
    p.appendChild(document.createTextNode((`${playerSelection} tied ${computerSelection}
    Player: ${playerScore} 
    Computer: ${computerScore}
    Round:${round}`)));
    scoreBox.appendChild(p);
    updatePlayerScore();
    updateComputerScore();
    return(`${playerSelection} tied ${computerSelection}
    Player: ${playerScore} 
    Computer: ${computerScore}
    Round:${round}`);






  }else if (playerSelection === 'rock' && computerSelection === 'scissor'||
             playerSelection === 'paper' && computerSelection === 'rock' ||
             playerSelection === 'scissor' && computerSelection === 'paper'){

      
     round += 1;           
     playerScore+=1;
     choices.push(1);
     scoreBox.style.color = "green";
     const p3 = document.createElement('p');
     p3.appendChild(document.createTextNode(`${playerSelection} beats ${computerSelection} 
     Player score: ${playerScore} 
     Computer score: ${computerScore} 
     Round:${round}`));
     scoreBox.appendChild(p3);        
     updatePlayerScore();
     updateComputerScore();
     return(`${playerSelection} beats ${computerSelection} 
     Player score: ${playerScore} 
     Computer score: ${computerScore} 
     Round:${round}`);




  } else {
    round += 1;
    computerScore+=1;
    choices.push(1);
    scoreBox.style.color = "red";
    const p4 = document.createElement('p');
     p4.appendChild(document.createTextNode(`${computerSelection} beats ${playerSelection}
     Computer score ${computerScore} 
     Player Score: ${playerScore} 
     Round:${round}`));
     scoreBox.appendChild(p4); 
     updatePlayerScore();
     updateComputerScore();
    return(`${computerSelection} beats ${playerSelection}
    Computer score ${computerScore} 
    Player Score: ${playerScore} 
    Round:${round}`);
  }
});

  scissorBtn.addEventListener('click', function(e){
    game();
    selection = 'scissor';
    playerSelection = selection.toLowerCase();
    computerSelection = computerPlay(); 

    questionMark.style.display = "none";
    const p2 = document.createElement('p');
    p2.appendChild(document.createTextNode(computerSelection.toUpperCase()));
    compSelect.appendChild(p2);




    if (playerSelection === computerSelection){
      round+=1;
      choices.push(1);
      scoreBox.style.color = "blue";
      const p = document.createElement('p');
      p.appendChild(document.createTextNode((`${playerSelection} tied ${computerSelection}
      Player: ${playerScore} 
      Computer: ${computerScore}
      Round:${round}`)));
      scoreBox.appendChild(p);
      updatePlayerScore();
      updateComputerScore();
      return(`${playerSelection} tied ${computerSelection}
      Player: ${playerScore} 
      Computer: ${computerScore}
      Round:${round}`);






    }else if (playerSelection === 'rock' && computerSelection === 'scissor'||
               playerSelection === 'paper' && computerSelection === 'rock' ||
               playerSelection === 'scissor' && computerSelection === 'paper'){

        
       round += 1;           
       playerScore+=1;
       choices.push(1);
       scoreBox.style.color = "green";
       const p3 = document.createElement('p');
       p3.appendChild(document.createTextNode(`${playerSelection} beats ${computerSelection} 
       Player score: ${playerScore} 
       Computer score: ${computerScore} 
       Round:${round}`));
       scoreBox.appendChild(p3);        
       updatePlayerScore();
       updateComputerScore();
       return(`${playerSelection} beats ${computerSelection} 
       Player score: ${playerScore} 
       Computer score: ${computerScore} 
       Round:${round}`);




    } else {
      round += 1;
      computerScore+=1;
      choices.push(1);
      scoreBox.style.color = "red";
      const p4 = document.createElement('p');
       p4.appendChild(document.createTextNode(`${computerSelection} beats ${playerSelection}
       Computer score ${computerScore} 
       Player Score: ${playerScore} 
       Round:${round}`));
       scoreBox.appendChild(p4); 
       updatePlayerScore();
       updateComputerScore();
      return(`${computerSelection} beats ${playerSelection}
      Computer score ${computerScore} 
      Player Score: ${playerScore} 
      Round:${round}`);
    }
  });

function updatePlayerScore(){
  playerScoreBox.innerText = playerScore
}

function updateComputerScore(){
  computerScoreBox.innerText = computerScore
}




function game(){
    for(i=0;i<5;i++){
        console.log(choices);
    }
    if(choices.length >= 5){
        scoreBox.innerText = 'Game!'
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorBtn.disabled = true;
    }
}








//function refreshPage() {
//  window.location.reload(true);
//}





