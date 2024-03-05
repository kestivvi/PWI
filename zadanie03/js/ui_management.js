function updateWhoIsNext(currentPlayer) {
    document.getElementById('whose-round-message').textContent = currentPlayer;
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
    document.getElementById('end-notification-message').textContent = winner + ' wygrywa!';
    showEndNotification();
}

function showDraw() {
    document.getElementById('end-notification-message').textContent = 'Remis!';
    showEndNotification();
}