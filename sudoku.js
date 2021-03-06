// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// const fs = require('fs');
// const sudoku = require('./sudoku-puzzles.txt','utf-8');
let boardString = '1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--';
function createBoard(boardString) {  // Функция создает и заполняет доску
  let newArr = [];
  let newStr = '';
  for (let i = 0; i < boardString.length; i += 1) {
    newStr += boardString[i];
    if (newStr.length === 9) {
      newArr.push(newStr.split('')); 
      newStr = '';
    }
    //console.log(newArr, '-----------------') // Процесс заполнения доски
  }
  return newArr
}


function solve(boardArr) {
  const solve = (boardArr) => {
    for (let row = 0; row < boardArr.length; row++) {
      for (let cols = 0; cols < boardArr[row].length; cols++) {
        if (boardArr[row][cols] === '-') {
          for (let num = 1; num <= 9; num++) {
            if(checkInteger(boardArr, num, row, cols)){
              boardArr[row][cols] = `${num}`;
              if(solve(boardArr)) {
                return true;
              }
              else{ 
                boardArr[row][cols] = '-';
              }
            }
          }
          return false;
        }
      }
    }
  return true;
  };
  solve(boardArr)
  return boardArr;
}

const solvedBoard = solve(createBoard(boardString));
console.log(prettyBoard(solvedBoard));

function checkInteger(field, int, row, col) {
    if (field[row].includes(int)) {
      return false
    }
    for (let i = 0; i < field.length; i++) {
      if (field[i][col] === `${int}`) {
        return false
      }
    }

    let boxRows = row - row % 3;
    let boxColumns = col - col % 3;
    for (let i =0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (`${int}` === (field[boxRows + i][boxColumns + j])) {
          return false;
        }
      }
    }
    return true
  }





console.log(solve(createBoard(boardString)))

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {
  return !board.map((el)=> el.join('')).join('').includes('-');
}
console.log('Все супер, у нас получилось!', isSolved(solvedBoard));
// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {
  if(!Array.isArray(board)){
    board = createBoard(boardString);
  }
  return board.map((el)=>el.join(' ')).join('\n');
}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
