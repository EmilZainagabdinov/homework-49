const blackSqr = '██';
const whiteSqr = '  ';
let chessBoard = '';

for (let r = 1; r < 9; r++) {
    for (let c = 1; c < 9; c++) {
        if ((c % 2 !== 0 && r % 2 !== 0) || (c % 2 === 0 && r % 2 === 0)) {
            chessBoard += blackSqr;
        } else {
            chessBoard += whiteSqr;
        }

        if (c === 8) {
            chessBoard += '\n';
        }
    }
}

console.log(chessBoard);