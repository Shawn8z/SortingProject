// let testArr = [ '$$$$$', '$$$', '$', '$$$$', '$$', '$$$$$$' ];
// console.log(testArr);




function bobbleSortPass(arr) {
    let arrLength = arr.length;
    let minItem, maxItem  = arr[0];
      
    for (let i = 0; i < arrLength; i++) {
      // loop through all items
      let leftSide = arr[i];
      let rightSide = arr[i + 1];
      if (rightSide === undefined) break;
  
      // if leftside is less than rightside, swap their position
      if (leftSide > rightSide) {
        arr[i] = rightSide;
        arr[i + 1] = leftSide;
      }
    }
    return arr;
  }
  
  
  module.exports = bobbleSortPass;