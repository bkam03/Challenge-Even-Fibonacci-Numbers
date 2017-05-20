/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */

//maxFibValue outputs the largest fib value under or equal to the number its given.

function _sumFibs( maxFibValue ) {
  var sum = 0;
  var a = 1;
  var b = 2;
  var currentNum = 0;
  sum = 2;

  while(a + b <= maxFibValue) {  //change this
    currentNum = a + b;
    console.log("currNum", currentNum);
    if(currentNum % 2 === 0) {
      sum += currentNum;
      console.log("even",sum);
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