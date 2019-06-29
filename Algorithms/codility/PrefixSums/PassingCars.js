function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let easts = 0, allCars = A.length, pairs = 0;
    
    for(let i = 0; i < A.length; i++) if(A[i] === 0) easts++;

    for(let i = 0; i < A.length; i++){
        allCars -= 1;
        if(A[i] === 0){
            easts--;
            pairs += allCars - easts;
        }
    }
    
    return pairs > 1000000000 ? -1 : pairs;
}

solution([0,1,0,1,1])