function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid; //if was player-id then will be  dataset[player-id];  the plus number will make the string into a number.
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {

  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  playerInputElement.value = '';
  
}

function savePlayerConfig(event) {  
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get('playername').trim();//' Francisco  '=> 'Francisco'
//recordemos que si el string es vacio o 0 se toma como falso y si tiene cualquier otro caracter o un 1 en adelante es verdadero entonces poniendo el '!' lo hace verdadero.
  if (!enteredPlayerName){
    event.target.firstElementChild.classList.add('error')
    errorsOutputElement.textContent = 'Please enter a valid name!';
    return;
  }

  const updatedPlayerDataElement = document.getElementById(`player-${editedPlayer}-data`); //or 'player-' + editedPlayer + '-data'
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer-1].name= enteredPlayerName;

  closePlayerConfig();
}

