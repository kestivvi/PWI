function onGameModeChange(value) {
    gameMode = value;
    if (gameMode === "2players") {
        hideHumanPlayerSymbolSelection()
    } else {
        showHumanPlayerSymbolSelection()
    }
}

function onHumanPlayerSymbolChange(value) {
    humanPlayerSymbol = value;
    botPlayerSymbol = value === 'X' ? 'O' : 'X';
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
