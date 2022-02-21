let itemCheck = require("./checkingFunctions.js");
let bobbleSortPass = require("./bobbleSort.js");
let selectionSort = require("./selectionSort.js");
let insertionPosFinder = require("./insertionSort.js");
// console.log(itemCheck);



// let itemArr = itemGen(30);
// let testArr = randomizeItem(itemArr);
// console.log(testArr);




function myBobbleSort(arr) {
  // using bobbleSort
  let myArr = [...arr];

  do {
    bobbleSortPass(myArr);
  } while ( !itemCheck.isIncreasingOrder( myArr ) );
  
  return myArr
}
// console.log(myBobbleSort(testArr));



function insertionSort(arr) {
  let result = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    result = insertionPosFinder(result, arr[i]);
  }

  return result;
}
// console.log(insertionSort(testArr));

console.log(selectionSort);
//console.log(selectionSort(testArr));


//let testArr = [ '$$$$$', '$$$', '$', '$$$$', '$$', '$$$$$$' ];



/* heap stuff   
  n is the number of elements in the array
  i is an arbitrary valid index on the array
  a is individule item in the array
*/

let myArr = [1, 5, 3, 7, 9, 8];



















function itemGen(num) {
  // create an array of strings and the total amount of strings is base on the num parameter; 
  let result = [];
  let item = "";
  
  for (let i = 0; i < num; i++) {
    result.push(item += "$");
  }

  return result;
}


function randomNumGen(num) {
  return Math.floor( Math.random() * num );
}


function randomizeItem(arr) {
  // randomize items in the given arr
  let randomizedArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    // make sure no same item is put into the new array
    let newItem = "";
    
    do {
      newItem = arr[randomNumGen(arrLength)];
    }
    while (randomizedArr.includes(newItem));

    randomizedArr.push(newItem);
  }

  return randomizedArr;
}
