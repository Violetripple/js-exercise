'use strict';

const quick_sort = origArray => {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    let left = [];
    let right = [];
    let newArray = [];
    let pivot = origArray.pop();
    // you can also use Array.shift() method to extract the first element of the array

    for (const i of origArray) {
      i <= pivot ? left.push(i) : right.push(i);
    }

    return newArray.concat(quick_sort(left), pivot, quick_sort(right));
  }
};

const myArray = [3, 0, 2, 5, -1, 4, 1];

const sortedArray = quick_sort(myArray);

console.log(sortedArray);
