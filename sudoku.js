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
  const puzzleSize = 9;
  const puzzle = [];
  for (let i = 0; i < puzzleSize; i += 1) {
    const count = i * 9;
    const sudokuLine = linedSudoku.slice(count, count + 9).split('');
    puzzle.push(sudokuLine);
  }
  return puzzle;
}

function solveSudoku(board) {
  const size = 9;
  const boxSize = 3;
  // пустые строки

  function voidd(board) {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        if (board[r][c] === '-') {
          return [r, c];
        }
      }
    }
    return '0';
  }
  // сюда вставить функцию valid которую скинет ярик
  // Проверка числа на единственное значение в строке и колонке
  function valid(num, pos, board) {
    const [r, c] = pos;

    // Попадаем на такое же число или на саму пустую клетку, возвращаем false
    for (let i = 0; i < size; i++) {
      if (board[i][c] === num && i !== r) {
        return false;
      }
    }

    // Попадаем на такое же число или на саму пустую клетку, возвращаем false
    for (let i = 0; i < size; i++) {
      if (board[r][i] === num && i !== c) {
        return false;
      }
    }

    // Проверка сектора на едиственные числа
    // Начальная граница сектора по строке и столбцу
    const boxstr = Math.floor(r / boxSize) * boxSize;
    const boxcol = Math.floor(c / boxSize) * boxSize;

    // i < boxstr + boxSize - конечная граница сектора по строке
    // j < boxcol + boxSize - конечная граница сектора по столбцу
    for (let i = boxstr; i < boxstr + boxSize; i++) {
      for (let j = boxcol; j < boxcol + boxSize; j++) {
        if (board[i][j] === num && i !== r && j !== c) {
          return false;
        }
      }
    }
    return true;
  }

  //
  function solve() {
    const currPos = voidd(board);

    if (currPos === '0') {
      return true;
    }

    for (let i = 1; i < size + 1; i++) {
      const currNum = i.toString();
      const isValid = valid(currNum, currPos, board);

      if (isValid) {
        const [x, y] = currPos;
        board[x][y] = currNum;

        if (solve()) {
          return true;
        }

        board[x][y] = '-';
      }
    }

    return false;
  }
  solve();
  return board;
}

function showAndSolve(number) {
  console.table(chooseSudoku(number));
  console.table(solveSudoku(chooseSudoku(number)));
}

showAndSolve(15);

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
  prettyBoard,
  chooseSudoku,
  solveSudoku,

};
