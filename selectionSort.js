function selectionSort(arr) {
    let resultArr = [];
    let processArr = [...arr]; // put all item into an new array
    let minItem;
    let minItemIndex = 0;
    let currentArrLength = 0;
  
    while (true) {
      minItem = processArr[0];
      currentArrLength = processArr.length;
  
      if (currentArrLength === 1) {
        // when array only have one item left
        resultArr.push( processArr[0] );
        break;
      }
      
      for (let i = 0; i < currentArrLength; i++) {
        // find the smallest item in the array
        if (minItem > processArr[i]) {
          minItem = processArr[i];
        }
      }
  
      resultArr.push(minItem);
  
      minItemIndex = processArr.indexOf( minItem );
      let leftSide =  processArr.slice( 0, minItemIndex );
      let rightSide = processArr.slice( minItemIndex + 1 );
      processArr = [...leftSide.concat(rightSide)];
    }
  
    return resultArr;
  }
  
  module.exports = selectionSort;