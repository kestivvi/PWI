function onGameModeChange(value) {
    gameMode = value;
}

function onGameReset() {
    restartGame();
}

function onGameStart() {
    startGame();
}

function onBoardCellClick(event) {
    if (currentState !== "IN_PROGRESS") {
        return;
    }

    const cell = event.target;
    const cellIndex = parseInt(cell.getAttribute('data-index'));
    const cellText = cell.textContent;

    if (cellText !== '') {
        return
    }

    makeMove(cellIndex, currentPlayer)
}
