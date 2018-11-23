const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers (sum, numsLeft, completionCallback) {
  // let count = 0;
  // while (count <= numsLeft count++) {  
  if (numsLeft > 0){
    reader.question("Give me num: ", function (numStr) {
      const thisNumber = parseInt(numStr);
      sum += thisNumber;
      addNumbers (sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function (sum) {
  console.log("Total Sum: " + sum);
  reader.close();
});