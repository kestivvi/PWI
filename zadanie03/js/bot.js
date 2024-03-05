function makeBotMove(gameMode) {

    let move;

    if (gameMode === 'bot-easy') {
        move = getBotMove(getBoardCopy(), true);
    } else if (gameMode === 'bot-medium') {
        move = Math.random() < 0.3 ? getRandomMove(getBoardCopy()) : getBotMove(getBoardCopy());
    } else if (gameMode === 'bot-hard') {
        move = getBotMove(getBoardCopy());
    }

    makeMove(move, 'O');
}

function evaluate(board) {
    if (checkWinner(board, 'X')) {
        return -1; // X wins
    } else if (checkWinner(board, 'O')) {
        return 1;  // O wins
    } else if (checkDraw(board)) {
        return 0;  // Draw
    } else {
        return null; // Game is still ongoing
    }
}

function getRandomMove(board) {
    free_cells = board
        .map((cell, index) => cell === '' ? index : -1)
        .filter(index => index !== -1);
    move = free_cells[Math.floor(Math.random() * free_cells.length)];
    return move;
}

function getBotMove(board, makeWorstMove = false) {
    let bestMove = -1;
    let bestScore = makeWorstMove ? Infinity : -Infinity;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = 'O';
            const score = minimax(board, 0, false);
            board[i] = '';

            if (makeWorstMove && score < bestScore) {
                bestScore = score;
                bestMove = i;
            } else if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }

    return bestMove;
}

function minimax(board, depth, isMaximizingPlayer) {
    const result = evaluate(board);

    if (result !== null) {
        return result * (10 - depth);
    }

    if (isMaximizingPlayer) {
        let maxEval = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'O';
                const eval = minimax(board, depth + 1, false);
                board[i] = '';
                maxEval = Math.max(maxEval, eval);
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = 'X';
                const eval = minimax(board, depth + 1, true);
                board[i] = '';
                minEval = Math.min(minEval, eval);
            }
        }
        return minEval;
    }
}
