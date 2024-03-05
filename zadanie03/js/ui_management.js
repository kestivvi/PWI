function updateWhoIsNext(currentPlayer, bot) {
    if (gameMode === 'bot' && currentPlayer === 'O') {
        document.getElementById('whose-round-message').textContent = 'Bot is thinking...';
    } else {
        document.getElementById('whose-round-message').textContent = 'It\'s ' + currentPlayer + '\'s turn';
    }
}

function showWhoIsNext() {
    document.getElementById('whose-round').style.display = 'flex';
}

function hideWhoIsNext() {
    document.getElementById('whose-round').style.display = 'none';
}

function hideGameModeSelection() {
    document.getElementById('game-mode-selection').style.display = 'none';
}

function showGameModeSelection() {
    document.getElementById('game-mode-selection').style.display = 'block';
}

function hideEndNotification() {
    document.getElementById('end-notification').style.display = 'none';
}

function showEndNotification() {
    document.getElementById('end-notification').style.display = 'flex';
}

function showWinner(winner) {
    document.getElementById('end-notification-message').textContent = winner + ' wins!';
    showEndNotification();
}

function showDraw() {
    document.getElementById('end-notification-message').textContent = 'It\'s a draw!';
    showEndNotification();
}