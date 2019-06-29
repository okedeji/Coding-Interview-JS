// https://leetcode.com/problems/squares-of-a-sorted-array/

let sortedSquares = function(A) {
    let pointB = 0, res = []; // required variables

    while(A[pointB] < 0){        // get POSITION (not index) of lowest negative number in the sorted array (A) ==>
        pointB++                // this will be the index of zero(0) or the lowest positive number (array index starts from 0)
    }

    let pointA = pointB - 1;    // subtract 1 from the position to get the INDEX of the lowest negative number (array index starts from 0)
    
    let arrA = A.slice(0, pointA + 1),      // array that contains all -ve numbers
        arrB = A.slice(pointB, A.length),  // array that contains all +ve numbers
        i = arrA.length-1, j = 0;         // iterator counters for each arrays (The Two Pointers)

    // merge function ==================================
    while(i >= 0 && j < arrB.length){       // loop backwards for arrA and forwards for arrB
         if(arrA[i]**2 < arrB[j]**2){      // as we check the lowest elements from each of the arrays and push it to res
             res.push(arrA[i]**2)         // and then increase the pointer array with lowest elements
             i--                         // until the loop conditions terminates
         }else{
             res.push(arrB[j]**2)
             j++
         }
     }

     while(i >= 0){              // if there are unchecked elements in arrA before loop termination
         res.push(arrA[i]**2)   // push them to the result array (res)
         i--
     }
     while(j < arrB.length){     // if there are unchecked elements in arrB before loop termination
         res.push(arrB[j]**2)   // push them to the result array (res)
         j++
     }
     
     return res;    // return result array (res)
};



// shorter version without creating seperate arrays
let sortedSquares = function(A) {
    let j = 0, res = []; // required variables

    while(A[j] < 0){        // get POSITION (not index) of lowest negative number in the sorted array (A) ==>
        j++                // it will be the index of zero(0) or the lowest positive number (array index starts from 0)
    }

    let i = j - 1;    // subtract 1 from the position to get the INDEX of the lowest negative number (array index starts from 0)

    // merge functon ================================================
    while(i >= 0 && j < A.length){       // loop backwards for -ve subarray and forwards for +ve subarray
         if(A[i]**2 < A[j]**2){         // as we check the lowest elements squared from each of the subarrays, 
             res.push(A[i]**2)         // push it to result array (res) and then loop respectively 
             i--                      // until the loop conditions terminates
         }else{
             res.push(A[j]**2)
             j++
         }
     }

     while(i >= 0){              // if there are unchecked elements in -ve subarray before loop termination
         res.push(A[i]**2)      // push them to the result array (res)
         i--
     }
     while(j < A.length){     // if there are unchecked elements in +ve subarray before loop termination
         res.push(A[j]**2)   // push them to the result array (res)
         j++
     }
     
     return res;    // return result array (res)
};

sortedSquares([-6, -3, -1, 0, 2, 4, 5])