# Project-Tic-Tac-Toe
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tic, tac, toe</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;1,700&display=swap"gity
      rel="stylesheet"
    />
    <link rel="stylesheet" href="styles/styles.css" />
    <link rel="stylesheet" href="styles/overlays.css">
    <link rel="stylesheet" href="styles/game.css">
    <link rel="stylesheet" href="styles/configuration.css">
    <script src="scripts/config.js" defer></script>
    <script src="scripts/game.js" defer></script>
    <script src="scripts/app.js" defer></script>
  </head>
  <body>
    <div id="backdrop"></div>
    <header id="main-header">
      <h1>Play Tic, Tac, Toe</h1>
      <p>Built with HTML, CSS, JavaScript</p>
    </header>
    <main>
      <aside class="modal" id="config-overlay">
        <h2>Choose your name</h2>
        <form>
          <div class="form-control">
            <label for="playername">Player Name</label>
            <input type="text" name="playername" id="playername" required/>
          </div>
          <p id="config-errors"></p>
          <div>
            <button type="reset" class="btn btn-alt" id="cancelBtn">Cancel</button>
            <button type="submit" class="btn" id="confirmBtn">Confirm</button>
          </div>
        </form>
      </aside>
      <section id="game-configuration">
        <ol>
          <li>
            <article id="player-1-data">
              <h2>Player 1</h2>
              <h3>PLAYER NAME</h3>
              <p class="player-symbol">X</p>
              <button class="btn btn-alt" id="edit-player-1-btn" data-playerid="1">Edit</button>
            </article>
          </li>
          <li>
            <article id="player-2-data">
              <h2>Player 2</h2>
              <h3>PLAYER NAME</h3>
              <p class="player-symbol">O</p>
              <button class="btn btn-alt" id="edit-player-2-btn" data-playerid="2">Edit</button>
            </article>
          </li>
        </ol>
        <button class="btn" id="startBtn">Start button</button>
      </section>

      <section id="active-game">
        <article id="game-over">
          <h2>Your won, <span id="winner-name">PLAYER NAME</span></h3>
          <p>Click "Start New Game" above, to start a new game!</p>
        </article>
        <p id="turn-paragraph">It's your turn <span id="active-player-name">Player Name</span>!</p>
        <ol id="game-board">
          <li data-col="1" data-row="1"></li>
          <li data-col="2" data-row="1"></li>
          <li data-col="3" data-row="1"></li>

          <li data-col="1" data-row="2"></li>
          <li data-col="2" data-row="2"></li>
          <li data-col="3" data-row="2"></li>

          <li data-col="1" data-row="3"></li>
          <li data-col="2" data-row="3"></li>
          <li data-col="3" data-row="3"></li>
        </ol>
      </section>
    </main>
  </body>
</html>
