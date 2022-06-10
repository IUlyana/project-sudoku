// Takes a board as a string in the format
// you see in the puzzle file. Returns
// something representing a board after
// your solver has tried to solve it.
// How you represent your board is up to you!

// const fs = require('fs');
// const sudoku = require('./sudoku-puzzles.txt','utf-8');
function createBoard (boardString){  // мы создаем доску
  let newArr = [];
  let newStr = '';
  for(let i = 0; i < boardString.length; i += 1) {
    newStr += boardString[i];
    if(newStr.length === 9){
      newArr.push(newStr.split(''));
      newStr = '';
    }
 }
  return newArr
}


function solve() {



  console.log(newArr)


  // for(let row = 0; row < boardString.length; row++) {
  //   for(let cols = 0; cols < boardString.length; cols++) {

  //   }
  // }
}

console.log(solve('1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--'))

// Returns a boolean indicating whether
// or not the provided board is solved.
// The input board will be in whatever
// form `solve` returns.
function isSolved(board) {

}

// Takes in a board in some form and
// returns a String that's well formatted
// for output to the screen.
// The input board will be in whatever
// form `solve` returns.
function prettyBoard(board) {

}

// Exports all the functions to use them in another file.
module.exports = {
  solve,
  isSolved,
  prettyBoard,
};
