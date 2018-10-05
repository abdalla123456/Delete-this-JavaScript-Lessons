let number = [6, 18]; //Boundary Numbers
let skipCount = 2; //Number of skipCounting between each element of the sequence, used in FOR Loop
let difference = number[6] - number[18]; //Difference, mandatory expectation
let startingNumber = number[6]; //Hint: used in the FOR Loop
for (let i=0; i<=difference; i++){
  even = (startingNumber += skipCount) % 2;
  console.log("This number is", even, "; This iteration is number", i+skipCount); //Example of Concatenating
}
