/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

//maxFibValue outputs the largest fib value under or equal to the number its given.

function _sumFibs( maxFibValue ) {
  var sum = 0;  // initiate sum, two containers to hold fibonacci factors, var for new fib num.
  var a = 1;
  var b = 2;
  var currentNum = 0;
  sum = 2;   //initialize sum with 2, since it is a seed and will not be processed normally as even.

  while(a + b <= maxFibValue) {
    currentNum = a + b;
    if(currentNum % 2 === 0) {
      sum += currentNum;
    }
    a = b;
    b = currentNum;
  }
  return sum;
}

// bonus round
function _highestFibonacciNumber (maxFibValue){
  var highest = 0;
  //define your base case, validate your input
  var a = 1;
  var b = 2;

  switch(true) {
    case(maxFibValue>=3):
      break;
    case 1:
      return 1;
      break;
    case 2:
      return 2;
      break;
    default:
      return "invalid";
  }

  while(a + b <= maxFibValue) {
    highest = a + b;
    a = b;
    b = highest;
  }

  //do your work here

  return highest;
};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs : _sumFibs,
  highestFibonacciNumber : _highestFibonacciNumber
};