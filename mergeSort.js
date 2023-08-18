function mergeSort(arr) {
  // This function sorts an array in ascending order using the merge sort algorithm.

  // The base case is when the array has 1 or fewer elements. In this case, the array is already sorted, so we simply return it.
  if (arr.length < 2) return arr;

  // The recursive step is to divide the array in half, sort each half recursively, and then merge the two sorted halves together.

  const mid = Math.floor(arr.length / 2);
  const leftHalf = mergeSort(arr.slice(0, mid));
  const rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
}

// This function merges two sorted arrays into a single sorted array.
function merge(leftArr, rightArr) {
  // Create a new array to store the merged elements.
  const mergedArr = [];

  // Indices for the left and right arrays.
  let i = 0;
  let j = 0;

  // Iterate until we have exhausted one of the two arrays.
  while (i < leftArr.length && j < rightArr.length) {
    // Add the smaller element to the merged array.
    if (leftArr[i] <= rightArr[j]) {
      mergedArr.push(leftArr[i]);
      i++;
    } else {
      mergedArr.push(rightArr[j]);
      j++;
    }
  }

  // Add the remaining elements from the left array to the merged array.
  while (i < leftArr.length) {
    mergedArr.push(leftArr[i]);
    i++;
  }

  // Add the remaining elements from the right array to the merged array.
  while (j < rightArr.length) {
    mergedArr.push(rightArr[j]);
    j++;
  }

  // Return the merged array.
  return mergedArr;
}

// miscellaneous functions
function generateNumbers(n) {
	const arr = []
	while (arr.length < n) {
		arr.push(Math.floor(Math.random()*100))
	}
	return arr
}

const unsortedNumbers = generateNumbers(9)
const sortedNumbers = mergeSort(unsortedNumbers)

console.log(unsortedNumbers)
console.log(sortedNumbers)