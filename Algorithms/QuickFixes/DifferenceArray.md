# Difference Array
> The opposite of Prefix Sum Array

This is the individual subtraction of integers with their immediate previous integers in an array. it is mostly used to perform operations on a range of integers in an array.

- Visit [here](https://blogarithms.github.io/articles/2018-11/difference-arrays) for explanation and implementation

### Example:
```
arr = [1, 2, 3, 4, 5]
deffArray(arr) = [1, 1, 1, 1, 1]
```

```js
function deffArray(A){
    let diff = [];
    for(let i = 0; i < A.length; i++){
        if(i === 0) diff[i] = A[i];
        else diff[i] = A[i] - A[i - 1];
    }
    return diff;
}
```