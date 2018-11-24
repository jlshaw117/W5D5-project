const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`${el1} > ${el2} type true or false.`, function (res) {
    if (res === 'true') {
      callback(true);
    } else {
      callback(false);
    }    
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], function (arg) {
      if (arg === true) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        madeAnySwaps = true;
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);        
      }
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {

    if (madeAnySwaps === false) {
      sortCompletionCallback(arr);      
    }
    else {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
  }
  outerBubbleSortLoop(true);
}



absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});