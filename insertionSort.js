let testArr = ['$','$$', '$$$$'];
let testStr = '$$$';



function insertionPosFinder(holdingArr, testItem) {
  let holdingArrLength = holdingArr.length

  // if holdingArr is empty push testItem in
  if (holdingArrLength === 0) {
    holdingArr.push(testItem);
    return holdingArr;
  }


  // if holdingArr have 1 item, depending on is testItem lesser or greater than the item in array, us push and unshift accordingly;
  if (holdingArrLength === 1) {

    if ( testItem < holdingArr[0] ) {
      holdingArr.unshift( testItem );
      return holdingArr;
    } else {
      holdingArr.push( testItem );
      return holdingArr;
    }

  }
  
  // if holdingArr have 2 or more items this block is active
  if (holdingArrLength > 1) {
    let targetIndex = 0;

    //find which index position to insert testItem
    for (let i = 0; i < holdingArrLength; i++) {
       if ( testItem < holdingArr[i] ) {
         targetIndex = holdingArr.indexOf( holdingArr[i] );  
         break;
       } 

       targetIndex = holdingArrLength
    }

    //cut the array in half by the the targetIndex, and insert the testItem 
    let leftSideArr = holdingArr.slice(0, targetIndex);
    let rightSideArr = holdingArr.slice(targetIndex);
    leftSideArr.push(testItem);

    return leftSideArr.concat(rightSideArr); 
  };

}
// let out = insertionPosFinder(testArr, testStr);



module.exports = insertionPosFinder;