# Prefix Sum Array
> THe opposite of DIfference Array

This is the individual sum of integers with their immediate previous integers in an array. it is mostly used to get the sum of integers at a given index/position 

- Visit [here](https://medium.com/beauty-date-stories/algorithms-how-prefix-sums-can-help-improving-operations-over-arrays-b1f8e8141668) for explanation

- [Here](https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/) for examples of application and implementation

### Example:
```
arr = [1, 2, 3, 4, 5]
prefixSum(arr) = [1, 3, 6, 10, 15]

// with the prefix sum, you can know the total sum of array at index 2 which is equal to 6 
```

```js
// longer version
function prefixSum(A){
    let pref = [];
    for(let i = 0; i < A.length; i++){
        if(i === 0) pref[i] = A[i];
        else pref[i] = pref[i - 1] + A[i];
    }
    return pref;
}

// shorter version 
function prefixSum(A){
    for(let i = 1; i < A.length; i++) A[i] += A[i - 1];
    return A;
}
```