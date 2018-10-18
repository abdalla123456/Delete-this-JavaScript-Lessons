if(isNaN (value) ) {
  stop = true;
  return "Type a real Number"
} else {
  return "Input Validate"
}

let one = 'value'
let a = 'value'
const testValue = 90 ;
console.log(fizzBuzz(testValue)); //Calling Function

function fizzBuzz (input) { //These match order of logic
  if ((input % 3 === 0 ) && (input % 5 === 0)) return 'FizzBuzz';
  if (input % 3 === 0) return "Fizz";
  if (input % 5 === 0) return 'Buzz';
  if (typeof input !=='number') return 'This is not a number.'; //Change to NaN
  return "This test number does nothing important. The input was " + input + ".";
}
