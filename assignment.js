// String Manipulation Functions:

//Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
    let spl = str.split("").reverse().join("");
    return console.log(spl);
}
reverseString("table");


//Count Characters: Create a function that counts the number of characters in a string.
function countString(str){

    let lengthOfString = str.split("").length
    return console.log(lengthOfString);
}

countString("table")


// Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.



function capilalizeFirstLetterOfEachWordInASentence(sentence){
    return console.log
    (sentence.split(" ").map(function(word){
       return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" "))
};
capilalizeFirstLetterOfEachWordInASentence("we figured it out")


 // Array Functions:
    // Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
   
 
    function findMax(arr) {
        let max = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }
        return console.log(max);
    }

    function findMin(arr) {
        let min = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return console.log(min);
    }

     // Sum of Array: Create a function that calculates the sum of all elements in an array.

     function sumArray(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }


    // Filter Array: Implement a function that filters out elements from an array based on a given condition.

    function filterArray(arr, condition) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (condition(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    }

    // Mathematical Functions:

// Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }