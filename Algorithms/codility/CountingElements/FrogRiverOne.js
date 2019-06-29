function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {}, seen = X;
    
    for(let i = 1; i < X + 1; i++) hash[i] = 0;

    for(let i = 0; i < A.length; i++){
        if(A[i] in hash){
          if(hash[A[i]] === 0) seen--;
          hash[A[i]]++
        } 
        if(seen === 0) return i;
    }
    return -1;
}

solution(5, [1,3,1,4,2,3,5,4])