function sameItemCheck(arr) {
    let arrLength = arr.length;
  
    for (let i = 0; i < arrLength; i++) {
      // store the current item, and its index
      let targetItem = arr[i];
      let nonoIndex = arr.indexOf(targetItem);
  
      //loop though the array, skip the nonoIndex and test the other index in the array
      for (let j = 0; j < arrLength; j++) {
  
        if ( j === nonoIndex ) {
          continue;
        } 
  
        if (targetItem === arr[j]) {
          return "same item found!"
        }
  
        return "no same item in array";
      }
    }
  }
  
  
  function isIncreasingOrder(arr) {
    let arrLength = arr.length;
  
    for (let i = 0; i < arrLength; i++) {
      // loop through the array an check if all items are in increasing order
      let leftSide = arr[i];
      let rightSide = arr[i + 1];
  
      if (leftSide > rightSide && rightSide !== undefined) {
        return false;
      }
    }
  
    return true;
  }
  
  
  
  module.exports = {
    sameItemCheck: sameItemCheck,
    isIncreasingOrder: isIncreasingOrder
  };