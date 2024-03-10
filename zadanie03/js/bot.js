function makeBotMove(gameMode, botSymbol) {

    let move;

    if (gameMode === 'bot-easy') {
        move = getBotMove(getBoardCopy(), true, botSymbol);
    } else if (gameMode === 'bot-medium') {
        move = Math.random() < 0.3 ? getRandomMove(getBoardCopy()) : getBotMove(getBoardCopy(), false, botSymbol);
    } else if (gameMode === 'bot-hard') {
        move = getBotMove(getBoardCopy(), false, botSymbol);
    }

    makeMove(move, botSymbol);
}


function evaluate(board, botPlayerSymbol) {
    let opponentSymbol = botPlayerSymbol === 'X' ? 'O' : 'X';

    if (checkWinner(board, opponentSymbol)) {
        return -1; // Opponent wins
    } else if (checkWinner(board, botPlayerSymbol)) {
        return 1;  // Bot wins
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

function getBotMove(board, makeWorstMove = false, botPlayerSymbol) {
    let bestMove = -1;
    let bestScore = makeWorstMove ? Infinity : -Infinity;

    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            board[i] = botPlayerSymbol;
            const score = minimax(board, 0, false, botPlayerSymbol);
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

function minimax(board, depth, isMaximizingPlayer, botPlayerSymbol) {
    const result = evaluate(board, botPlayerSymbol);

    if (result !== null) {
        return result * (10 - depth);
    }

    const opponentSymbol = botPlayerSymbol === 'X' ? 'O' : 'X';

    if (isMaximizingPlayer) {
        let maxEval = -Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = botPlayerSymbol;
                const eval = minimax(board, depth + 1, false, botPlayerSymbol);
                board[i] = '';
                maxEval = Math.max(maxEval, eval);
            }
        }
        return maxEval;
    } else {
        let minEval = Infinity;
        for (let i = 0; i < board.length; i++) {
            if (board[i] === '') {
                board[i] = opponentSymbol;
                const eval = minimax(board, depth + 1, true, botPlayerSymbol);
                board[i] = '';
                minEval = Math.min(minEval, eval);
            }
        }
        return minEval;
    }
}
