function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let min, hash = {};

    for(let i = 0; i < A.length; i++){
       if(A[i] > 0) hash[A[i]] = true;
    }
    
    if(!hash[1]) return 1;

    for(let i = 0; i < A.length; i++){
        if(A[i] > 0){
            if(min === undefined) min = A[i];
            min = Math.min(A[i], min);
        } 
    }
    
    min = min == undefined ? 1 : Math.max(min, 1)

    for(let i = 0; i <= A.length; i++){
        if(!hash[min]) return min;
        min++;
    }
}

solution([1, 2,3])