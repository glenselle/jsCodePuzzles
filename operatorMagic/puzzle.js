/*

  The Operator Magic Puzzle

  Expectation:
  When areValuesNonZero is called with either (or both) arguments 0 it
  should return false -- otherwise return true

  Constraints:
  You may only add two operators to this code to solve the puzzle

*/

function areValuesNonZero (a, b) {
  return (a && b)
}

let result = areValuesNonZero(5, 3)
console.log(result)
