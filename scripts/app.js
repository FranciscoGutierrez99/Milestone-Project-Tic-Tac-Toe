//Configure players form inputs clickeable buttons etc
// Start Game button clear game if already started
//Turn base gameplay each player can click only one button each turn 
// Check for winner 3 in a row if not wait till all is full and call a draw
//show a message for each one winner loser and in case draw.
let gameData = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]



let editedPlayer = 0;
let activePlayer = Math.floor(Math.random() * 2);
let roundCounter = 1;

const players = [
  {
    name:'',
    symbol:'X'
  },
  {
    name:'',
    symbol:'O'
  }
]



const playerConfigOverlayElement = document.getElementById('config-overlay');
const backdropElement = document.getElementById('backdrop');
const formElement = document.querySelector('form');
const errorsOutputElement = document.getElementById('config-errors');
const activeGameElement = document.getElementById('active-game');

const editPlayer1BtnElement = document.getElementById('edit-player-1-btn');
const editPlayer2BtnElement = document.getElementById('edit-player-2-btn');
const playerCancelBtnElement = document.getElementById('cancelBtn');
const playerInputElement = document.getElementById('playername');
const startNewGameElement = document.getElementById('startBtn');
const gameFieldElements = document.querySelectorAll('#game-board li');
const activePlayerDisplayElement = document.getElementById('active-player-name');
const gameOverDisplayElement = document.getElementById('game-over');
const winnerPlayerDisplayElement = document.getElementById('winner-name');
const turnDisplayElement = document.getElementById('turn-paragraph');


editPlayer1BtnElement.addEventListener('click',openPlayerConfig);
editPlayer2BtnElement.addEventListener('click',openPlayerConfig);

playerCancelBtnElement.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);

startNewGameElement.addEventListener('click',startNewGame);

for (element of gameFieldElements) {
  element.addEventListener('click',selectedGameField);
}




//or gameboardElement <= this is the ol gameBoardElement.addEventListener('click',selectGameField) the problem with this is that if we click in a place that is not an a box it bug out.
// //function selectedGameField (event){  
  // if(event.target.tagName==='LI'){
   // return
 // }
//   event.target.textContent = players[activePlayer].symbol;
//   event.target.classList.add('disabled');
//   switchedPlayer();
//   activePlayerDisplay();
// }