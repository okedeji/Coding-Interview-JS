// Used the frequency counter pattern
function countUniqueValues(A){
    let counter = {};

    for(let elem of A){
        counter[elem] = counter[elem] ? counter[elem] + 1 : 1;
    }

    return Object.keys(counter).length
  
}

// Used the two pointer pattern
function countUniqueValues(A){
    let a = 0,
        b = 1;
    for(let i = 0; i < A.length; i++){
        
         if(A[a] == A[b]){
             b++
         }else if(A[a] != A[b]){
             A[a+1] = A[b];
             a++
             b++
         }
    }
    return A.slice(0,a).length
  
}