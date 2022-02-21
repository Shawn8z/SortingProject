// let testArr = [ '$$$$$', '$$$', '$', '$$$$', '$$', '$$$$$$' ];

let numArr = [1, 2, 3, 4, 7, 8, 9, 10, 14, 16];

let nums = [1, 2, 3, 4, 7, 8, 9];






function removeItemFromArr(arr, item) {
    let itemIndex = arr.indexOf(item);
    let arrLength = arr.length;
    let newArr = [];


    if (itemIndex === 0) {
        newArr = arr.slice(1);

    } else if (itemIndex === arrLength -1) {
        newArr = arr.slice(0, arrLength - 1);

    } else {
        let leftSide, rightSide;

        leftSide = arr.slice(0, itemIndex);
        rightSide = arr.slice(itemIndex + 1);

        newArr = leftSide.concat(rightSide);
    }

    console.log(newArr);
}

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

function findMaxItem(arr) {
    let arrLength = arr.length;
    if (arrLength=== 0) {
        return "Input is an empty array.";
    }

    let maxItem = arr[0];
    for (let i = 0; i < arrLength; i++) {
        if (maxItem < arr[i]) {
            maxItem = arr[i];
        }
    }

    return maxItem;
}
