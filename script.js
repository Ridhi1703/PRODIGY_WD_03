// const COMPUTER = 1;
// const HUMAN = 2;
// const SIDE = 3;
// const COMPUTERMOVE = 'O';
// const HUMANMOVE = 'X';

// let gboard = Array(SIDE).fill().map(() => Array(SIDE).fill('*'));
// let maxIn = 0;
// let whoseTurn = HUMAN;

// function initialize(gboard) {
//     for (let i = 0; i < SIDE; i++) {
//         for (let j = 0; j < SIDE; j++) {
//             gboard[i][j] = '*';
//             document.getElementsByClassName('button-option')[i * SIDE + j].innerText = '';
//         }
//     }
//     maxIn = 0;
// }

// function showBoard(gboard) {
//     for (let i = 0; i < SIDE; i++) {
//         for (let j = 0; j < SIDE; j++) {
//             document.getElementsByClassName('button-option')[i * SIDE + j].innerText = gboard[i][j] === '*' ? '' : gboard[i][j];
//         }
//     }
// }

// function columnCross(gboard) {
//     for (let i = 0; i < SIDE; i++) {
//         if (gboard[0][i] === gboard[1][i] && gboard[1][i] === gboard[2][i] && gboard[0][i] !== '*') {
//             return true;
//         }
//     }
//     return false;
// }

// function rowCrossed(gboard) {
//     for (let i = 0; i < SIDE; i++) {
//         if (gboard[i][0] === gboard[i][1] && gboard[i][1] === gboard[i][2] && gboard[i][0] !== '*') {
//             return true;
//         }
//     }
//     return false;
// }

// function diagonalCross(gboard) {
//     if ((gboard[0][0] === gboard[1][1] && gboard[1][1] === gboard[2][2] && gboard[0][0] !== '*') ||
//         (gboard[0][2] === gboard[1][1] && gboard[1][1] === gboard[2][0] && gboard[0][2] !== '*')) {
//         return true;
//     }
//     return false;
// }

// function gameOver(gboard) {
//     return rowCrossed(gboard) || columnCross(gboard) || diagonalCross(gboard);
// }

// function minimax(gboard, depth, isPlay) {
//     let score = 0, bestscore = 0;
//     if (gameOver(gboard)) {
//         if (isPlay) return -10;
//         else return +10;
//     } else {
//         if (depth < 9) {
//             if (isPlay) {
//                 bestscore = -999;
//                 for (let i = 0; i < SIDE; i++) {
//                     for (let j = 0; j < SIDE; j++) {
//                         if (gboard[i][j] === '*') {
//                             gboard[i][j] = COMPUTERMOVE;
//                             score = minimax(gboard, depth + 1, false);
//                             gboard[i][j] = '*';
//                             if (bestscore < score) bestscore = score;
//                         }
//                     }
//                 }
//                 return bestscore;
//             } else {
//                 bestscore = 999;
//                 for (let i = 0; i < SIDE; i++) {
//                     for (let j = 0; j < SIDE; j++) {
//                         if (gboard[i][j] === '*') {
//                             gboard[i][j] = HUMANMOVE;
//                             score = minimax(gboard, depth + 1, true);
//                             gboard[i][j] = '*';
//                             if (bestscore > score) bestscore = score;
//                         }
//                     }
//                 }
//                 return bestscore;
//             }
//         }
//     }
//     return 0;
// }

// function bestWay(gboard, maxIn) {
//     let x = -1, y = -1;
//     let score = 0, bestscore = -999;
//     for (let i = 0; i < SIDE; i++) {
//         for (let j = 0; j < SIDE; j++) {
//             if (gboard[i][j] === '*') {
//                 gboard[i][j] = COMPUTERMOVE;
//                 score = minimax(gboard, maxIn + 1, false);
//                 gboard[i][j] = '*';
//                 if (bestscore < score) bestscore = score, x = i, y = j;
//             }
//         }
//     }
//     return x * 3 + y;
// }

// function declareWinner(whoseTurn) {
//     if (whoseTurn === COMPUTER)
//         document.getElementById('message').innerText = "COMPUTER has won";
//     else
//         document.getElementById('message').innerText = "HUMAN has won";
// }

// function playTurn(row, col) {
//     if (gboard[row][col] !== '*' || gameOver(gboard)) return;

//     gboard[row][col] = HUMANMOVE;
//     showBoard(gboard);
//     maxIn++;
//     if (gameOver(gboard)) {
//         declareWinner(HUMAN);
//         return;
//     }
//     if (maxIn === SIDE * SIDE) {
//         document.getElementById('message').innerText = "It's a draw!";
//         document.getElementById('popup').classList.remove('hide');
//         return;
//     }

//     let n = bestWay(gboard, maxIn);
//     let x = Math.floor(n / SIDE);
//     let y = n % SIDE;
//     gboard[x][y] = COMPUTERMOVE;
//     showBoard(gboard);
//     maxIn++;
//     if (gameOver(gboard)) {
//         declareWinner(COMPUTER);
//         return;
//     }
//     if (maxIn === SIDE * SIDE) {
//         document.getElementById('message').innerText = "It's a draw!";
//         document.getElementById('popup').classList.remove('hide');
//         return;
//     }
// }

// function resetGame() {
//     initialize(gboard);
//     whoseTurn = HUMAN;
//     document.getElementById('popup').classList.add('hide');
//     document.getElementById('message').innerText = '';
// }

// initialize(gboard);


