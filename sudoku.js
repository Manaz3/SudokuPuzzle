let solveSudoku = function(board) {
  const size = 9;
  const boxSize = 3;
//пустые строки 
function voidd (board) {
  for (let i = 0; i < size; i++) {
      for (let c = 0; c < size; c++) {
          if(board[i][c] === '-') {
              return [i,c];
          }
      }
  }
  return '0';
}
// сюда вставить функцию valid которую скинет ярик

// 
const solve = () => {
  const currPos = voidd(board);
  if (currPos === '0') {
      return true;
  }
  for (let i = 1; i < size + 1; i++) {
    
      const currNum = i.toString();
      const isValid = valid(currNum, currPos, board);
    
      if (isValid) {
          const [x,y] = currPos;
          board[x][y] = currNum;

          if(solve()) {
              return true;
          }

          board[x][y] = '-';
      }
  }

  return false;
}
solve();
return board;
};