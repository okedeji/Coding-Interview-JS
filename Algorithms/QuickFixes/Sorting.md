# Sorting
This is a simple reminder note on any topic which might slip out of memory.

## `Bubble Sort`
This is an O(N^2) sorting algorithm that just swaps `j` & `j+1` elements of array if latter is greater than former. This operation will be done for each of `i` element of the array.

```js
// swap tracking can reduce the run time.
for (let i of a) {
    let isSwap = false // to track if there wasn't a swap at the end of the outer loop
    for (let j = 0; j < a.length; j++) {
        if (a[j] > a[j + 1]) {
            [a[j], a[j + 1]] = [a[j + 1], a[j]];
            isSwap = true;
        }
    }
    if (!isSwap) break; // if there was no swap. break out because it's sorted already. 
}
```
## `Quick Sort`
This is an O(N^2) worst case but O(NlogN) best and average case algorithm. The Simple Idea is to randomly pick a `Pivot Element` which which will be initially returned to it's original Index aka `Pivot Index`. At this point, the `pivot` will have some elements on the right and some at it's right side. we can recursively call the `Pivot function` on each sides until each side subarray is decreased to lenght = 1. 
```js
// Pivot helper function
function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => { // swap helper
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    let pivot = arr[start]; // Assume the pivot is first element (Better it's random though to avoid O(n^2))
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) { // Pivot Logic
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx); // Swap the pivot element and current element on the swapPoint
    return swapIdx;
}

// Quick Sort fucntion itself
function quickSort(arr, left = 0, right = arr.length -1){ // Recursion though ;)
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        quickSort(arr,left,pivotIndex-1); // left
        quickSort(arr,pivotIndex+1,right); // right
      }
     return arr;
} 
```
## `Merge Sort`
This is an O(NlogN) algorithm. It sorts an array on the basic idea of recursively spliting the array into halves until each subarray length = 1. It then merge up each of those subarrays with a `Merge function` that does some basic comparison before merging
```js
// Merge heper function
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){ //compare each elements two arrays and merge up into one array
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    // incase there are some remainders in either of the two arrays
    // spread the results array, the remaining elements in arr1 and arr2 into res array
    let res = [...results, ...arr1.slice(i), ...arr2.slice(j)]
    return res;
}

// The merge logic itself
function mergeSort(arr){ // Recursion again, sorry ;)
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2); // get the mid of the array/subarray and then merge respectively
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
```
## `Counting Sort`
This is an O(N+k) sorting algorithm. Its is linear because it is very different from the above algorithm in the sense that instead of making use of the `comparison pattern` used by most sorting algorithm, it makes use of `frequency counter method`. The Idea is that it makes use of a count array that increament it index based the frequency of the index value in the original unsorted array. You can check [here](https://medium.com/javascript-algorithms/javascript-algorithms-counting-sort-c94a5fd70c9c) and [here](https://www.geeksforgeeks.org/counting-sort/) for better explanation and implementation
> Counting Sort cannot be used in all cases. It can only be used:
- > When all element are integers (Signed or Unsigned)
- > When the range of the array element is known  i.e (min & max)
- > When the range is not out of limit (range length <= array length or "slightly out of limit")
```js
function countingSort(A, min, max){
    let count = [], j = 0;

    for(let i = min; i <= max; i++) count[i] = 0; // fill up count array with zeros in respect to the given range

    for(let i of A) count[i]++; // Increament count index with respect to corresponding value in original array

    for (let i = min; i <= max; i++) { //The sorting
        while (count[i]-- > 0) A[j++] = i;
    }

    return A;
}
```