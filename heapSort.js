// let testArr = [ '$$$$$', '$$$', '$', '$$$$', '$$', '$$$$$$' ];

let numArr = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];

let num3Arr = [1, 2, 3, 4, 7, 8];












function leftChild(arr, index) {
    console.log( arr[index * 2 + 1] );
}

function rightChild(arr, index) {
    console.log( arr[index * 2 + 2] );
}

function parentNode(arr, index) {
    let parentIndex = Math.floor(Math.abs( (index - 2)/2 ));
    console.log( arr[parentIndex] );
}

leftChild(num3Arr, 0);
rightChild(num3Arr, 0);
// parentNode(num3Arr, 1);