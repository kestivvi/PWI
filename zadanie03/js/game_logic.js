function checkWinner(board, player) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (const pattern of winPatterns) {
        if (pattern.every(cell => board[cell] === player)) {
            return true;
        }
    }

    return false;
}

function checkDraw(board) {
    return board.every(cell => cell !== '');
}

function makeMove(cellIndex, player) {
    setValueOfCell(cellIndex, player);
    endTurn();
}
