let currentState = "NOT_STARTED"; // NOT_STARTED, IN_PROGRESS, FINISHED
let currentPlayer = 'X';
let gameMode = document.getElementById('game-mode').value;
let humanPlayerSymbol = document.getElementById('human-player-symbol').value;
let botPlayerSymbol = humanPlayerSymbol === 'X' ? 'O' : 'X';
const cells = document.querySelectorAll('.cell');


////////////////////////
// Board state manipulation

function getBoardCopy() {
    return Array.from(cells).map(cell => cell.textContent);
}

function getValueOfCell(cellIndex) {
    return cells[cellIndex].textContent;
}

function setValueOfCell(cellIndex, value) {
    cells[cellIndex].textContent = value;
}

////////////////////////
// Game state manipulation

// NOT_STARTED -> IN_PROGRESS
function startGame() {
    hideGameModeSelection();
    updateWhoIsNext(currentPlayer);
    showWhoIsNext();
    currentState = "IN_PROGRESS";

    if (gameMode.startsWith("bot") && currentPlayer === botPlayerSymbol) {
        setTimeout(() => makeBotMove(gameMode, botPlayerSymbol), 100);
    }
}

// IN_PROGRESS -> IN_PROGRESS
// X -> O -> X -> O -> ...
function endTurn() {

    if (checkWinner(getBoardCopy(), currentPlayer)) {
        endGame(false, currentPlayer);
        return;
    }

    if (checkDraw(getBoardCopy())) {
        endGame(true);
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    updateWhoIsNext(currentPlayer);

    if (gameMode.startsWith("bot") && currentPlayer === botPlayerSymbol) {
        setTimeout(() => makeBotMove(gameMode, botPlayerSymbol), 100);
    }
}

// IN_PROGRESS -> FINISHED
function endGame(isDraw, winner) {
    hideWhoIsNext();
    isDraw ? showDraw() : showWinner(winner)
    currentState = "FINISHED";
}

// FINISHED -> NOT_STARTED
function restartGame() {
    showGameModeSelection();
    hideEndNotification();
    if (gameMode !== "2players") {
        showHumanPlayerSymbolSelection();
    }
    cells.forEach(cell => cell.textContent = '');
    currentPlayer = 'X';
    currentState = "NOT_STARTED";
}
