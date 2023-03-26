const fs = require('fs');
const path = require('path');
const { argv } = require('process');
/**
 * Принимает игровое поле в формате строки — как в файле sudoku-puzzles.txt.
 * Возвращает игровое поле после попытки его решить.
 * Договорись со своей командой, в каком формате возвращать этот результат.
 */
// function solve(boardString) {

// }

// Функция принимает число от 1 до 15, которое соответсвует строке из puzzles.txt,
// возвращает Судоку в формате массива
function chooseSudoku(number) {
  const lineBoard = fs.readFileSync(path.join(__dirname, 'puzzles.txt'), 'utf-8');
  const sudokuPuzzle = lineBoard.split('\n');
  const linedSudoku = sudokuPuzzle[number - 1];
  console.log(linedSudoku);
  const puzzleSize = 9;
  const puzzle = [];
  for (let i = 0; i < puzzleSize; i += 1) {
    const count = i * 9;
    const sudokuLine = linedSudoku.slice(count, count + 9).split('');
    puzzle.push(sudokuLine);
  }
  return puzzle;
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
// Как и зачем, если мы уже формируем массив в привычном виде на этапе функции Solve?
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