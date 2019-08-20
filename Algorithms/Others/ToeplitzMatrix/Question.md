# Toeplitz Matrix
A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has the same element. Given a non-empty matrix arr, write a function that returns true if and only if it is a Toeplitz matrix. The matrix can be any dimensions, not necessarily square.

### Example,
```
[[1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]]
is a Toeplitz matrix, so we should return true, while

[[1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]]
isn’t a Toeplitz matrix, so we should return false.
```

### Constraints:
```
[time limit] 5000ms
[input] array.array.integer arr
    0 ≤ arr.length ≤ 20
    0 ≤ arr[i].length ≤ 20
    0 ≤ arr[i][j] ≤ 20
[output] boolean
```