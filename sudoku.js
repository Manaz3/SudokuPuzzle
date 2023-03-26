/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
function solve(boardString) {
}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */
function isSolved(board) {

}

/**
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает строку с игровым полем для последующего вывода в консоль.
 * Подумай, как симпатичнее сформировать эту строку.
 */
function prettyBoard(board) {

}

// Экспортировать функции для использования в другом файле (например, readAndSolve.js).
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};

// Проверка числа на едиственное значение в строке и колонке
function valid (num, pos, board) {
  const [s,c] = pos;

 
  for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== s) {
          return false;
      }
  }

  
  for (let i = 0; i < size; i++) {
      if (board[s][i] === num && i !== c) {
          return false;
      }
  }
// Проверка сектора на едиственные числа
  const boxstr = Math.floor( s/boxSize ) * boxSize;
  const boxcol = Math.floor( c/boxSize ) * boxSize;

  for (let i = boxstr; i < boxstr + boxSize; i++) {
      for (let j = boxcol; j < boxcol + boxSize; j++) {
          if (board[i][j] === num && i !== s && j !== c) {
              return false;
          }
      }
  }

  return true;
}